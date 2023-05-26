package com.codecool.backend.service;

import com.codecool.backend.api.exception.ElementNotFoundException;
import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Optional<Student> findById(long id) {
        return studentRepository.findById(id);
    }

    public Student save(Student student) {
        return studentRepository.save(student);
    }

    public void deleteById(long id) {
        studentRepository.deleteById(id);
    }

}
