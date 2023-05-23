package com.codecool.backend.api;

import com.codecool.backend.model.entity.Company;
import com.codecool.backend.service.company.CompanyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("companies")
@CrossOrigin(origins = "*")
public class CompanyEndpoint {
    private final CompanyService companyService;

    public CompanyEndpoint(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @PostMapping
    Company saveCompany(@RequestBody Company company) {
        return companyService.saveCompany(company);
    }

    @DeleteMapping("{id}")
    void deleteCompany(@PathVariable long id) {
        companyService.deleteCompany(id);
    }

}
