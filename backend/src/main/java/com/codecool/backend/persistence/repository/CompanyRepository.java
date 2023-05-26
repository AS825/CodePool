package com.codecool.backend.persistence.repository;

import com.codecool.backend.persistence.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
