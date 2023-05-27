package com.codecool.backend.service.welcomepage;

import com.codecool.backend.repository.OfficePersonalRepository;
import com.codecool.backend.repository.WelcomePageRepository;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.*;


class WelcomePageServiceTest {
    WelcomePageRepository welcomePageRepository = mock(WelcomePageRepository.class);
    OfficePersonalRepository officePersonalRepository = mock(OfficePersonalRepository.class);
    WelcomePageService welcomePageService = new WelcomePageService(welcomePageRepository, officePersonalRepository);

    @Test
    void findAllGraduates() {
        welcomePageService.getGraduatesForSlideshow();
        verify(welcomePageRepository).findAll();
    }

    @Test
    void findAllPersonalFromOffice() {
        welcomePageService.getOfficePersonal();
        verify(officePersonalRepository).findAll();
    }




}