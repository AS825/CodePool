package com.codecool.backend.service.welcomepage;

import com.codecool.backend.model.entity.Graduate;
import com.codecool.backend.model.entity.OfficePersonal;
import com.codecool.backend.persistence.repository.GraduateRepository;
import com.codecool.backend.repository.OfficePersonalRepository;
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
