package com.codecool.backend.service;

import com.codecool.backend.model.Student;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class StudentCreator {

    private String title = "Full Stack Developer student";
    private Set<Student> students= new HashSet<>();
    private String imgsrc;
    public Set<Student> createStudents() {

        students.addAll(List.of(new Student(1,"Alen Sacipi",title, List.of("Frontend", "Backend", "Project Management"),"alen"),
                new Student(2,"Bernadette Christiner",title, List.of("Frontend", "Backend", "Project Management"),"berni"),
                new Student(3,"Peter Niederwieser",title, List.of("Frontend", "Backend", "Project Management"),"peter")));
        return students;

    }
}
