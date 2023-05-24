package com.codecool.backend.api;

import com.codecool.backend.model.entity.Student;
import com.codecool.backend.service.student.StudentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.http.MediaType.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

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

        verify(studentService).getAllStudents();
    }

    @Test
    void saveStudent() throws Exception {
        Student student = new Student("TestStudent", "TestDescription", "TestProject", "TestImgSrc");
        String body = """
                {"name": "TestStudent",
                "description": "TestDescription",
                "project": "TestProject",
                "imgSrc": "TestImgSrc"}
                """;
        when(studentService.saveStudent(student)).thenReturn(student);

        mockMvc.perform(post(url)
                    .contentType(APPLICATION_JSON)
                    .content(body))
                .andExpect(status().isOk());

        verify(studentService).saveStudent(student);
    }

    @Test
    void updateStudent() throws Exception {
        long id = 1;
        String updateUrl = url + "/" + id;
        Student student = new Student("TestStudent", "TestDescription", "TestProject", "TestImgSrc");
        String body = """
                {"name": "TestStudent",
                "description": "TestDescription",
                "project": "TestProject",
                "imgSrc": "TestImgSrc"}
                """;
        when(studentService.updateStudentById(id, student)).thenReturn(student);

        mockMvc.perform(patch(updateUrl)
                        .contentType(APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isOk());

        verify(studentService).updateStudentById(id, student);
    }

    @Test
    void deleteStudent() throws Exception {
        long id = 1;
        String deleteUrl = url + "/" + id;

        mockMvc.perform(delete(deleteUrl))
                .andExpect(status().isOk());

        verify(studentService).deleteStudent(id);
    }
}