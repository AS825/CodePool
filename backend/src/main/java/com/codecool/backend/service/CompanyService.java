package com.codecool.backend.service;

import com.codecool.backend.persistence.entity.Company;
import com.codecool.backend.persistence.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public List<Company> findAll() {
        return companyRepository.findAll();
    }

    public Company save(Company company) {
        return companyRepository.save(company);
    }

    public void deleteById(long id) {
        companyRepository.deleteById(id);
    }

}
