package com.codecool.backend.service.student;

import com.codecool.backend.model.entity.Student;
import com.codecool.backend.repository.StudentRepository;

import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


class StudentServiceTest {
    StudentRepository studentRepository = mock(StudentRepository.class);
    StudentService studentService = new StudentService(studentRepository);

    @Test
    void getAllStudents() {
        studentService.getAllStudents();

        verify(studentRepository).findAll();
    }

    @Test
    void getStudentById_StudentIsFound() throws StudentNotFoundException {
        long id = 1;
        Student student = new Student("TestName", "TestDescription", "TestProject", "TestImgSrc");
        when(studentRepository.findById(id)).thenReturn(Optional.of(student));

        Student result = studentService.getStudentById(id);

        verify(studentRepository).findById(id);
        assertEquals(student, result);
    }

    @Test
    void getStudentById_StudentIsNotFound() {
        long notExistingId = 1;
        when(studentRepository.findById(notExistingId)).thenReturn(Optional.empty());

        assertThrows(StudentNotFoundException.class, () -> studentService.getStudentById(notExistingId));
    }

    @Test
    void saveStudent() {
        Student student = new Student("TestName", "TestDescription", "TestProject", "TestImgSrc");
        when(studentRepository.save(student)).thenReturn(student);

        Student result = studentService.saveStudent(student);

        verify(studentRepository).save(student);
        assertEquals(student, result);
    }

    @Test
    void deleteStudent() {
        long id = 1;
        studentService.deleteStudent(id);

        verify(studentRepository).deleteById(id);
    }
}