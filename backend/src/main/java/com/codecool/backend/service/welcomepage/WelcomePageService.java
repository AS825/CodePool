package com.codecool.backend.service.welcomepage;

import com.codecool.backend.model.entity.Graduate;
import com.codecool.backend.model.entity.OfficePersonal;
import com.codecool.backend.repository.OfficePersonalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WelcomePageService {
    private final com.codecool.backend.repository.GraduateRepository welcomePageRepository;
    private final OfficePersonalRepository officePersonalRepository;

    public WelcomePageService(com.codecool.backend.repository.GraduateRepository welcomePageRepository, OfficePersonalRepository officePersonalRepository) {
        this.welcomePageRepository = welcomePageRepository;
        this.officePersonalRepository = officePersonalRepository;
    }

    public List<Graduate> getGraduatesForSlideshow() {
        return welcomePageRepository.findAll();
    }

    public List<OfficePersonal> getOfficePersonal() {
        return officePersonalRepository.findAll();
    }
}
