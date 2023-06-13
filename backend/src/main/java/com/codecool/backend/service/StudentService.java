package com.codecool.backend.service;

import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.entity.Technology;
import com.codecool.backend.persistence.repository.StudentRepository;
import com.codecool.backend.persistence.repository.TechnologyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final TechnologyRepository technologyRepository;

    public StudentService(StudentRepository studentRepository, TechnologyRepository technologyRepository) {
        this.studentRepository = studentRepository;
        this.technologyRepository = technologyRepository;
    }

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Optional<Student> findById(long id) {
        return studentRepository.findById(id);
    }

    public Student save(Student student) {
        List<Technology> technologies = student.getTechnologies();
        List<Technology> allDistinctTechnologies = technologyRepository.findAll()
                .stream()
                .collect(Collectors.toMap(Technology::getImage, Function.identity(), (t1, t2) -> t1))
                .values()
                .stream().toList();
        List<Technology> persistedTechnologies = technologies.stream()
                .map(technology -> allDistinctTechnologies.stream().filter(tech -> tech.getId() == technology.getId()).findFirst().get())
                .collect(Collectors.toList());
        student.setTechnologies(persistedTechnologies);
        return studentRepository.save(student);
    }

    public void deleteById(long id) {
        studentRepository.deleteById(id);
    }

}
