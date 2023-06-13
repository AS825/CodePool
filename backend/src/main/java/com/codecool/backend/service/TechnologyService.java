package com.codecool.backend.service;

import com.codecool.backend.persistence.entity.Technology;
import com.codecool.backend.persistence.repository.TechnologyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class TechnologyService {
    private final TechnologyRepository technologyRepository;

    public TechnologyService(TechnologyRepository technologyRepository) {
        this.technologyRepository = technologyRepository;
    }
    public List<Technology> findAllDistinctByImage() {
        return technologyRepository.findAll()
                .stream()
                .collect(Collectors.toMap(Technology::getImage, Function.identity(), (t1, t2) -> t1))
                .values()
                .stream().toList();
    }
}
