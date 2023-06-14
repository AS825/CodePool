package com.codecool.backend.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    public SecurityConfiguration(JwtAuthenticationFilter jwtAuthFilter, AuthenticationProvider authenticationProvider) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.authenticationProvider = authenticationProvider;

    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .headers().frameOptions().disable()
                .and()
                /*.csrf(csrf -> csrf
                        .ignoringRequestMatchers(AntPathRequestMatcher.antMatcher("/h2-console/**")))*/
                .csrf().disable()
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/api/v1/auth/**", "/h2-console/**").permitAll();
                    auth.requestMatchers(AntPathRequestMatcher.antMatcher("/h2-console/**")).permitAll();
                    auth.anyRequest().authenticated();

                })
                /*.requestMatchers(AntPathRequestMatcher.antMatcher("/h2-console/**")).permitAll()
                .anyRequest()*/
                /*.authenticated()*/
                /*.and()*/
                /*.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)*/
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
        ;

        return http.build();
    }


}

