package com.codecool.backend.api;

import com.codecool.backend.persistence.entity.Company;
import com.codecool.backend.service.CompanyService;
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
    List<Company> get() {
        return companyService.findAll();
    }

    @PostMapping
    Company save(@RequestBody Company company) {
        return companyService.save(company);
    }

    @DeleteMapping("{id}")
    void deleteOne(@PathVariable long id) {
        companyService.deleteById(id);
    }

}
