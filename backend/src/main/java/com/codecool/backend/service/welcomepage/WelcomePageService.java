package com.codecool.backend.service.welcomepage;

import com.codecool.backend.persistence.entity.Graduate;
import com.codecool.backend.persistence.entity.OfficePersonal;
import com.codecool.backend.persistence.repository.GraduateRepository;
import com.codecool.backend.persistence.repository.OfficePersonalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WelcomePageService {
    private final GraduateRepository graduateRepository;
    private final OfficePersonalRepository officePersonalRepository;

    public WelcomePageService(GraduateRepository graduateRepository, OfficePersonalRepository officePersonalRepository) {
        this.graduateRepository = graduateRepository;
        this.officePersonalRepository = officePersonalRepository;
    }

    public List<Graduate> getGraduatesForSlideshow() {
        return graduateRepository.findAll();
    }

    public List<OfficePersonal> getOfficePersonal() {
        return officePersonalRepository.findAll();
    }
}
