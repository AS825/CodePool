package com.codecool.backend.service.welcomepage;

import com.codecool.backend.model.entity.Graduate;
import com.codecool.backend.repository.WelcomePageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WelcomePageService {
    private final WelcomePageRepository welcomePageRepository;

    public WelcomePageService(WelcomePageRepository welcomePageRepository) {
        this.welcomePageRepository = welcomePageRepository;
    }

    public List<Graduate> getGraduatesForSlideshow() {
        return welcomePageRepository.findAll();
    }
}
