package com.code.Task_SpringBoot.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(),userDetails);
    }

    private String generateToken(Map<String, Object> extraClass, UserDetails userDetails) {
        return Jwts.builder().setClaims(extraClass).setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ 1000 * 60 * 60 *24))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();

    }

    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode("e5drycPmXOA3oAsmptb4ApBY9WHkUj3czD1qa82N1iE=");
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token,Claims::getExpiration);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolvers) {
        final Claims claims = extratAllClaims(token);
        return claimsResolvers.apply(claims);
    }

    private Claims extratAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token).getBody();
    }


}
