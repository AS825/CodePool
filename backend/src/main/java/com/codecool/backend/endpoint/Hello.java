package com.codecool.backend.endpoint;

import com.codecool.backend.model.HelloWorld;
import com.codecool.backend.model.Student;
import com.codecool.backend.model.StudentStorage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class Hello {

    @GetMapping
    public String sayHello() {
        HelloWorld helloWorld = new HelloWorld();
        return helloWorld.sayHallo();
    }

    @GetMapping("students")
    public Set<Student> getAllStudents() {
        StudentStorage studentStorage = new StudentStorage();
        return studentStorage.readAll();
    }
}
