package com.codecool.backend.security.auth.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthenticationResponse {

    @JsonProperty("username")
    private String username;
    @JsonProperty("access_token")
    private String accessToken;

    public AuthenticationResponse(String username, String accessToken) {
        this.username = username;
        this.accessToken = accessToken;
    }

    public AuthenticationResponse() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
