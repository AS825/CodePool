package com.codecool.backend.service.student;

import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.entity.Technology;
import com.codecool.backend.persistence.repository.StudentRepository;
import com.codecool.backend.persistence.repository.TechnologyRepository;
import com.codecool.backend.service.StudentService;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


class StudentServiceTest {
    StudentRepository studentRepository = mock(StudentRepository.class);
    TechnologyRepository technologyRepository = mock(TechnologyRepository.class);
    StudentService studentService = new StudentService(studentRepository, technologyRepository);

    @Test
    void getAllStudents() {
        studentService.findAll();

        verify(studentRepository).findAll();
    }

    @Test
    void getStudentById() {
        long id = 1;
        List<Technology> technologies = List.of(new Technology("javaIcon"));
        Student student = new Student("testFirstName", "testLastName", "testAge", "testEmail", "testSelfDescription", "testProjectDescription", "testImage", technologies);
        when(studentRepository.findById(id)).thenReturn(Optional.of(student));

        Optional<Student> result = studentService.findById(id);

        verify(studentRepository).findById(id);
        Optional<Student> expected = Optional.of(student);
        assertEquals(expected, result);
    }

    @Test
    void deleteStudent() {
        long id = 1;
        studentService.deleteById(id);

        verify(studentRepository).deleteById(id);
    }
}
