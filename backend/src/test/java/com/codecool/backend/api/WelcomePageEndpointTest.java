package com.codecool.backend.api;

import com.codecool.backend.security.configuration.JwtService;
import com.codecool.backend.security.configuration.SecurityConfiguration;
import com.codecool.backend.security.token.TokenRepository;
import com.codecool.backend.service.welcomepage.WelcomePageService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@WithMockUser
@WebMvcTest(WelcomePageEndpoint.class)
@Import({SecurityConfiguration.class, JwtService.class})
class WelcomePageEndpointTest {

    @MockBean
    WelcomePageEndpoint welcomePageEndpoint;
    @MockBean
    WelcomePageService welcomePageService;
    @MockBean
    TokenRepository tokenRepository;
    @MockBean
    AuthenticationProvider authenticationProvider;
    @Autowired
    MockMvc mockMvc;
    String urlGraduates = "/graduates";
    String urlForOfficePersonal = "/office-personal";

    @Test
    void getAllGraduates() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(urlGraduates).contentType(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void getAllPeopleFromOffice() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(urlForOfficePersonal).contentType(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk());
    }
}