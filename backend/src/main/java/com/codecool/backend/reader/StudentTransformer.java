package com.codecool.backend.reader;


import com.codecool.backend.persistence.entity.Student;

public class StudentTransformer implements DataTransformer<Student> {
    @Override
    public Student transform(String line) {
        String[] columns = line.split(",");
        String name = columns[0];
        String description = columns[1];
        String project = columns[2];
        String imgSrc = columns[3];

        return new Student(name,description,project,imgSrc);
    }
}
