package com.codecool.backend.api;

import com.codecool.backend.persistence.entity.Company;
import com.codecool.backend.service.CompanyService;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CompanyEndpoint.class)
class CompanyEndpointTest {
    @MockBean
    CompanyService companyService;
    @Autowired
    MockMvc mockMvc;
    String url = "/companies";
    @Test
    void getAllCompanies() throws Exception {
        mockMvc.perform(get(url))
                .andExpect(status().isOk());

        verify(companyService).findAll();
    }

    @Test
    void saveCompany() throws Exception {
        Company company = new Company("TestCompany", "testCompany@mail.com");
        String body = """
                {"name": "TestCompany",
                "contactMail": "testCompany@mail.com"}
                """;
        when(companyService.save(company)).thenReturn(company);

        mockMvc.perform(post(url)
                        .contentType(APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isOk());

        verify(companyService).save(company);
    }

    @Test
    void deleteCompany() throws Exception {
        long id = 1;
        String deleteUrl = url + "/" + id;
        mockMvc.perform(delete(deleteUrl))
                .andExpect(status().isOk());

        verify(companyService).deleteById(id);
    }
}