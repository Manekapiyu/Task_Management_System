package com.code.Task_SpringBoot.services.auth;

import com.code.Task_SpringBoot.dto.SignupRequest;
import com.code.Task_SpringBoot.dto.UserDto;

public interface AuthService {

    UserDto signupUser (SignupRequest signupRequest);

    boolean hasUserWithEmail (String email);
}
