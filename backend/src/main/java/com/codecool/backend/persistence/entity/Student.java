package com.codecool.backend.persistence.entity;

import jakarta.persistence.*;

import java.util.Objects;


@Entity
public final class Student {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String description;
    private String project;
    private String image;

    public Student(String name, String description, String project, String image) {
        this.name = name;
        this.description = description;
        this.project = project;
        this.image = image;
    }

    public Student() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, project, image);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return id == student.id && Objects.equals(name, student.name) && Objects.equals(description, student.description)
               && Objects.equals(project, student.project) && Objects.equals(image, student.image);
    }
}
