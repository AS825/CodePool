package com.codecool.backend.api;

import com.codecool.backend.persistence.entity.Technology;
import com.codecool.backend.service.TechnologyService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("technologies")
public class TechnologyEndpoint {
    private final TechnologyService technologyService;

    public TechnologyEndpoint(TechnologyService technologyService) {
        this.technologyService = technologyService;
    }

    @GetMapping
    List<Technology> get() {
        return technologyService.findAllDistinctByImage();
    }
}
