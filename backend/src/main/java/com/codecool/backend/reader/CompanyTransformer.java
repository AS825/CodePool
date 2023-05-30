package com.codecool.backend.reader;


import com.codecool.backend.persistence.entity.Company;

public class CompanyTransformer implements DataTransformer<Company> {
    @Override
    public Company transform(String line) {
        String[] columns = line.split(",");
        String companyName = columns[0];
        String email = columns[1];

        return new Company(companyName,email);

    }
}
