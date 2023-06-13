package com.codecool.backend.persistence.repository;

import com.codecool.backend.persistence.entity.Technology;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TechnologyRepository extends JpaRepository<Technology, Long> {
}
