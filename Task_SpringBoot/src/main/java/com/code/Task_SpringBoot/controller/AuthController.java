package com.code.Task_SpringBoot.controller;


import com.code.Task_SpringBoot.dto.AuthenticationRequest;
import com.code.Task_SpringBoot.dto.AuthenticationResponse;
import com.code.Task_SpringBoot.dto.SignupRequest;
import com.code.Task_SpringBoot.dto.UserDto;
import com.code.Task_SpringBoot.entities.User;
import com.code.Task_SpringBoot.repository.UserRepository;
import com.code.Task_SpringBoot.services.auth.AuthService;
import com.code.Task_SpringBoot.services.jwt.UserService;
import com.code.Task_SpringBoot.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;



    @PostMapping("/signup")
    public ResponseEntity<?> signupUser(@RequestBody SignupRequest signupRequest) {
        if (authService.hasUserWithEmail(signupRequest.getEmail())) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                    .body("USER ALREADY EXISTS WITH THIS EMAIL");
        }
        UserDto createUserDto = authService.signupUser(signupRequest);
        if (createUserDto == null)
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("user not created");
        return ResponseEntity.status(HttpStatus.CREATED).body(createUserDto);
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest authenticationRequest){
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getEmail(),
                    authenticationRequest.getPassword()));

        }catch(BadCredentialsException e){
            throw new BadCredentialsException("Invalid email or password");

        }
        final UserDetails userDetails= userService.userDetailService().loadUserByUsername(authenticationRequest.getEmail());
        Optional<User> optionalUser =   userRepository.findFirstByEmail(authenticationRequest.getEmail());
        final String jwtToken =  jwtUtil.generateToken((userDetails));
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
       if(optionalUser.isPresent()){
           authenticationResponse.setJwt(jwtToken);
           authenticationResponse.setUserId(optionalUser.get().getId());
           authenticationResponse.setUserRole(optionalUser.get().getUserRole());
       }
        return authenticationResponse;
    }
}
