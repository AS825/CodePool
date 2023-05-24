package com.codecool.backend.service.company;

import com.codecool.backend.model.entity.Company;
import com.codecool.backend.repository.CompanyRepository;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CompanyServiceTest {
    CompanyRepository companyRepository = mock(CompanyRepository.class);
    CompanyService companyService = new CompanyService(companyRepository);
    @Test
    void getAllCompanies() {
        companyService.getAllCompanies();

        verify(companyRepository).findAll();
    }

    @Test
    void saveCompany() {
        Company company = new Company("TestCompany", "testCompany@mail.com");
        when(companyRepository.save(company)).thenReturn(company);

        Company result = companyService.saveCompany(company);

        verify(companyRepository).save(company);
        assertEquals(company, result);
    }

    @Test
    void deleteCompany() {
        long id = 1;
        companyService.deleteCompany(id);

        verify(companyRepository).deleteById(id);
    }
}