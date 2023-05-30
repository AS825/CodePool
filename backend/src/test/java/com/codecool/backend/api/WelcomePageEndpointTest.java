package com.codecool.backend.api;

import com.codecool.backend.service.welcomepage.WelcomePageService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@WebMvcTest(WelcomePageEndpoint.class)
class WelcomePageEndpointTest {

    @MockBean
    WelcomePageEndpoint welcomePageEndpoint;
    @MockBean
    WelcomePageService welcomePageService;

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