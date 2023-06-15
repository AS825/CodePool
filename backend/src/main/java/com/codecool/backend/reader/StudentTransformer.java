package com.codecool.backend.reader;


import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.entity.Technology;
import com.codecool.backend.service.converter.Base64Converter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class StudentTransformer implements DataTransformer<Student> {

    private final Base64Converter base64Converter;

    public StudentTransformer(Base64Converter base64Converter) {
        this.base64Converter = base64Converter;
    }

    @Override
    public Student transform(String line) throws IOException {
        String[] columns = line.split(",");
        int INDEX_OF_FIRST_TECH = 7;
        String firstName = columns[0];
        String lastName = columns[1];
        String age = columns[2];
        String email = columns[3];
        String selfDescription = columns[4];
        String projectDescription = columns[5];
        String imgage = base64Converter.convertImgToBase64String(columns[6]);
        List<Technology> technologies = getTechnologies(columns, INDEX_OF_FIRST_TECH);
        return new Student(firstName, lastName, age, email, selfDescription, projectDescription, imgage, technologies);
    }

    private List<Technology> getTechnologies(String[] columns, int indexOfFirstTech) throws IOException {
        List<Technology> technologies = new ArrayList<>();
        String[] techImages = getTechImages(columns, indexOfFirstTech);
        for(String techImage : techImages) {
            technologies.add(new Technology(base64Converter.convertImgToBase64String(techImage)));
        }
        return technologies;
    }

    private String[] getTechImages(String[] columns, int indexOfFirstTech) {
        String[] techIcons = new String[columns.length - indexOfFirstTech];
        for (int i = 0; i < columns.length - 1 - indexOfFirstTech; i++) {
            techIcons[i] = columns[i + indexOfFirstTech];
        }
        techIcons[columns.length - 1 - indexOfFirstTech] = columns[columns.length - 1];
        return techIcons;
    }
}
