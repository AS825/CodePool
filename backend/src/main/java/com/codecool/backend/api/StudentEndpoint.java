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

    @GetMapping()
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    Student post(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @PatchMapping("/{id}")
    Student updateStudent(@PathVariable long id, @RequestBody Student student) throws StudentNotFoundException {
        return studentService.updateStudentById(id, student);
    }

    @DeleteMapping("{id}")
    void delete(@PathVariable long id) {
        studentService.deleteStudent(id);
    }
}
