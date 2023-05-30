package com.codecool.backend.service.welcomepage;

import com.codecool.backend.persistence.repository.GraduateRepository;
import com.codecool.backend.repository.OfficePersonalRepository;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.*;


class WelcomePageServiceTest {

   GraduateRepository graduateRepository = mock(GraduateRepository.class);
    OfficePersonalRepository officePersonalRepository = mock(OfficePersonalRepository.class);
    WelcomePageService welcomePageService = new WelcomePageService(graduateRepository, officePersonalRepository);

    @Test
    void findAllGraduates() {
        welcomePageService.getGraduatesForSlideshow();
        verify(graduateRepository).findAll();
    }

    @Test
    void findAllPersonalFromOffice() {
        welcomePageService.getOfficePersonal();
        verify(officePersonalRepository).findAll();
    }




}