package com.codecool.backend.service.company;

import com.codecool.backend.model.entity.Company;
import com.codecool.backend.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }
    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }
    public void deleteCompany(long id) {
        companyRepository.deleteById(id);
    }

}
