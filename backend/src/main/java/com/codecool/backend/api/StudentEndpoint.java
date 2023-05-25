package com.codecool.backend.api;

import com.codecool.backend.model.entity.Student;
import com.codecool.backend.service.student.StudentNotFoundException;
import com.codecool.backend.service.student.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentEndpoint {

    private final StudentService studentService;

    public StudentEndpoint(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("{id}")
    public Student getStudentById(@PathVariable long id) throws StudentNotFoundException {
        return studentService.getStudentById(id);
    }
    @PostMapping
    Student saveStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @PutMapping
    Student updateStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @DeleteMapping("{id}")
    void deleteStudent(@PathVariable long id) {
        studentService.deleteStudent(id);
    }
}
