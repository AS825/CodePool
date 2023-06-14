package com.codecool.backend.security.auth.service;

import com.codecool.backend.security.auth.data.AuthenticationResponse;
import com.codecool.backend.security.auth.data.RegisterRequest;
import com.codecool.backend.security.configuration.JwtService;
import com.codecool.backend.security.entity.user.User;
import com.codecool.backend.security.entity.user.UserRepository;
import com.codecool.backend.security.token.Token;
import com.codecool.backend.security.token.TokenRepository;
import com.codecool.backend.security.token.TokenType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserRepository userRepository, TokenRepository tokenRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse register(RegisterRequest request) {
        UserDetails user = new User(
                request.getUsername(),
                request.getEmail(),
                request.getPassword(),
                request.getRole()
        );

        UserDetails savedUser = userRepository.save(user);
        String jwtToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(savedUser, jwtToken);
        return new AuthenticationResponse(
                ((User) user).getName(),
                jwtToken
        );
    }

    private void saveUserToken(UserDetails user, String jwtToken) {
        Token token = new Token(
                jwtToken,
                TokenType.BEARER,
                false,
                false,
                (User) user
        );
        tokenRepository.save(token);
    }
}
