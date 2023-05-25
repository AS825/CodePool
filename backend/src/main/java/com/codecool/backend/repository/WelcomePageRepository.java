package com.codecool.backend.repository;

import com.codecool.backend.model.entity.Graduate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WelcomePageRepository extends JpaRepository<Graduate,Long> {
}
