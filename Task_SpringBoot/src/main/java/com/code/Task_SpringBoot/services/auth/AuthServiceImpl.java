package com.code.Task_SpringBoot.services.auth;

import com.code.Task_SpringBoot.dto.SignupRequest;
import com.code.Task_SpringBoot.dto.UserDto;
import com.code.Task_SpringBoot.entities.User;
import com.code.Task_SpringBoot.enums.UserRole;
import com.code.Task_SpringBoot.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; // inject bean

    @PostConstruct
    public void createAnAdminAccount() {
        List<User> admins = userRepository.findByUserRole(UserRole.ADMIN);

        if (admins.isEmpty()) {
            User admin = new User();
            admin.setEmail("manishasewwandi15@gmail.com");
            admin.setName("admin");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setUserRole(UserRole.ADMIN);
            userRepository.save(admin);
            System.out.println("Admin account created Successfully");
        } else {
            System.out.println("Admin account already exists! Total admins: " + admins.size());
        }
    }

    @Override
    public UserDto signupUser(SignupRequest signupRequest) {
        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setName(signupRequest.getName());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setUserRole(UserRole.EMPLOYEE);
        User savedUser = userRepository.save(user);
        return savedUser.getUserDto();
    }

    @Override
    public boolean hasUserWithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }
}
