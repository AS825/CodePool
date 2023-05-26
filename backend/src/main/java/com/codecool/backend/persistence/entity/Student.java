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
    private String imgSrc; // i.e. imageSource, image

    public Student(String name, String description, String project, String imgSrc) {
        this.name = name;
        this.description = description;
        this.project = project;
        this.imgSrc = imgSrc;
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

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, project, imgSrc);
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return id == student.id && Objects.equals(name, student.name) && Objects.equals(description, student.description)
                && Objects.equals(project, student.project) && Objects.equals(imgSrc, student.imgSrc);
    }
}
