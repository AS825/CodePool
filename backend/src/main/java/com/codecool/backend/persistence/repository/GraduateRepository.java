package com.codecool.backend.persistence.repository;

import com.codecool.backend.persistence.entity.Graduate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GraduateRepository extends JpaRepository<Graduate,Long> {
}
