package com.code.Task_SpringBoot.services.jwt;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {

    UserDetailsService userDetailService();

}
