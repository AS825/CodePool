package com.codecool.backend.api;

import com.codecool.backend.model.entity.Graduate;
import com.codecool.backend.service.welcomepage.WelcomePageService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/graduates")
@CrossOrigin(origins = "*")
public class WelcomePageEndpoint {

    private final WelcomePageService welcomePageService;


    public WelcomePageEndpoint(WelcomePageService welcomePageService) {
        this.welcomePageService = welcomePageService;
    }
    @GetMapping
    public List<Graduate> getGraduates() {
        return welcomePageService.getGraduatesForSlideshow();
    }

}
