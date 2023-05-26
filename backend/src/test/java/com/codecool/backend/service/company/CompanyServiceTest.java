package com.codecool.backend.service.company;

import com.codecool.backend.persistence.entity.Company;
import com.codecool.backend.persistence.repository.CompanyRepository;
import com.codecool.backend.service.CompanyService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CompanyServiceTest {
    CompanyRepository companyRepository = mock(CompanyRepository.class);
    CompanyService companyService = new CompanyService(companyRepository);
    @Test
    void getAllCompanies() {
        companyService.findAll();

        verify(companyRepository).findAll();
    }

    @Test
    void saveCompany() {
        Company company = new Company("TestCompany", "testCompany@mail.com");
        when(companyRepository.save(company)).thenReturn(company);

        Company result = companyService.save(company);

        verify(companyRepository).save(company);
        assertEquals(company, result);
    }

    @Test
    void deleteCompany() {
        long id = 1;
        companyService.deleteById(id);

        verify(companyRepository).deleteById(id);
    }
}