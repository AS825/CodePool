package com.codecool.backend.api;

import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.service.StudentService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpMethod;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Optional;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StudentEndpoint.class)
class StudentEndpointTest {
    @MockBean
    StudentService studentService;

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
        Student student = new Student("test", "test", "test", "test");
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
        Student student = new Student("TestStudent", "TestDescription", "TestProject", "TestImgSrc");
        String body = """
                {"name": "TestStudent",
                "description": "TestDescription",
                "project": "TestProject",
                "imgSrc": "TestImgSrc"}
                """;
        when(studentService.save(student)).thenReturn(student); // this seems unnecessary

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