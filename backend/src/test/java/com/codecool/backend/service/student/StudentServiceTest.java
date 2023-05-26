package com.codecool.backend.service.student;

import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.repository.StudentRepository;
import com.codecool.backend.service.StudentService;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


class StudentServiceTest {
    StudentRepository studentRepository = mock(StudentRepository.class);
    StudentService studentService = new StudentService(studentRepository);

    @Test
    void getAllStudents() {
        studentService.findAll();

        verify(studentRepository).findAll();
    }

    @Test
    void getStudentById() {
        long id = 1;
        Student student = new Student("TestName", "TestDescription", "TestProject", "TestImgSrc");
        when(studentRepository.findById(id)).thenReturn(Optional.of(student));

        Optional<Student> result = studentService.findById(id);

        verify(studentRepository).findById(id);
        Optional<Student> expected = Optional.of(student);
        assertEquals(expected, result);
    }

    @Test
    void saveStudent() {
        Student student = new Student("TestName", "TestDescription", "TestProject", "TestImgSrc");
        when(studentRepository.save(student)).thenReturn(student);

        Student result = studentService.save(student);

        verify(studentRepository).save(student);
        assertEquals(student, result);
    }

    @Test
    void deleteStudent() {
        long id = 1;
        studentService.deleteById(id);

        verify(studentRepository).deleteById(id);
    }
}