package com.codecool.backend.api;

import com.codecool.backend.api.exception.ElementNotFoundException;
import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("students")
public class StudentEndpoint {

    private final StudentService studentService;

    public StudentEndpoint(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> get() {
        return studentService.findAll();
    }

    @GetMapping("{id}")
    public Student getOne(@PathVariable long id) throws ElementNotFoundException {
        return studentService.findById(id)
                .orElseThrow(ElementNotFoundException::new);
    }

    @PostMapping
    Student save(@RequestBody Student student) {
        return studentService.save(student);
    }

    @PutMapping
    Student update(@RequestBody Student student) {
        return studentService.save(student);
    }

    @DeleteMapping("{id}")
    void deleteOne(@PathVariable long id) {
        studentService.deleteById(id);
    }
}
