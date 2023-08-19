package com.codecool.backend.api;

import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.entity.Technology;
import com.codecool.backend.security.configuration.JwtService;
import com.codecool.backend.security.configuration.SecurityConfiguration;
import com.codecool.backend.security.token.TokenRepository;
import com.codecool.backend.service.StudentService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WithMockUser
@WebMvcTest(StudentEndpoint.class)
@Import({SecurityConfiguration.class, JwtService.class})
class StudentEndpointTest {
    @MockBean
    StudentService studentService;
    @MockBean
    TokenRepository tokenRepository;
    @MockBean
    AuthenticationProvider authenticationProvider;
    @Autowired
    MockMvc mockMvc;
    String url = "/students";

    @Test
    void getAllStudents() throws Exception {
        mockMvc.perform(get(url))
                .andExpect(status().isOk());

        verify(studentService).findAll();
    }

    @Test
    void getStudentById() throws Exception {
        long id = 1;
        String extendedUrl = url + "/" + id;
        List<Technology> technologies = List.of(new Technology("javaIcon"));
        Student student = new Student("testFirstName", "testLastName", "testAge", "testEmail", "testSelfDescription", "testProjectDescription", "testImage", technologies);
        when(studentService.findById(id)).thenReturn(Optional.of(student));

        mockMvc.perform(get(extendedUrl))
                .andExpect(status().isOk());

        verify(studentService).findById(id);
    }

    @Test
    void getStudentByIdIsNotFound() throws Exception {
        long id = 1;
        String extendedUrl = url + "/" + id;

        mockMvc.perform(get(extendedUrl))
                .andExpect(status().isNotFound());

        verify(studentService).findById(id);
    }

    @ParameterizedTest
    @ValueSource(strings = {"POST", "PUT"})
    void saveAndUpdateStudent(String httpMethodName) throws Exception {
        List<Technology> technologies = List.of(new Technology("javaIcon"));
        Student student = new Student("testFirstName", "testLastName", "testAge", "testEmail", "testSelfDescription", "testProjectDescription", "testImage", technologies);
        String body = """
                {"firstName": "testFirstName",
                "lastName": "testLastName",
                "age": "testAge",
                "email": "testEmail",
                "selfDescription": "testSelfDescription",
                "projectDescription": "testProjectDescription",
                "image": "testImage",
                "technologies": ["javaIcon"]}
                """;

        mockMvc.perform(MockMvcRequestBuilders.request(HttpMethod.valueOf(httpMethodName), url)
                        .contentType(APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isOk());

        verify(studentService).save(student);
    }

    @Test
    void deleteStudent() throws Exception {
        long id = 1;
        String extendedUrl = url + "/" + id;

        mockMvc.perform(delete(extendedUrl))
                .andExpect(status().isOk());

        verify(studentService).deleteById(id);
    }
}