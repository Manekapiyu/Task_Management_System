package com.code.Task_SpringBoot.services.jwt;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService extends UserDetailsService {

    UserDetailsService userDetailService();

    @Override
    default UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
