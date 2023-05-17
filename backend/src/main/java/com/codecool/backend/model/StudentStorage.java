package com.codecool.backend.model;
import com.codecool.backend.service.StudentCreator;
import java.util.Set;

public class StudentStorage {
    public Set<Student> readAll() {
        StudentCreator studentCreator = new StudentCreator();
        return studentCreator.createStudents();
    }
}
