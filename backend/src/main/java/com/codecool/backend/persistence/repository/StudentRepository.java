package com.codecool.backend.persistence.repository;

import com.codecool.backend.persistence.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository <Student, Long> {
}
