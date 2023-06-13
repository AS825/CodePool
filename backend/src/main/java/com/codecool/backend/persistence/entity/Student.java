package com.codecool.backend.persistence.entity;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String age;
    private String email;
    private String selfDescription;
    private String projectDescription;
    @Column(length = 1000000)
    private String image;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Technology> technologies;

    public Student(String firstName, String lastName, String age, String email, String selfDescription, String projectDescription, String image, List<Technology> technologies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.selfDescription = selfDescription;
        this.projectDescription = projectDescription;
        this.image = image;
        this.technologies = technologies;
    }

    public Student() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSelfDescription() {
        return selfDescription;
    }

    public void setSelfDescription(String selfDescription) {
        this.selfDescription = selfDescription;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Technology> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(List<Technology> technology) {
        this.technologies = technology;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return id == student.id && Objects.equals(firstName, student.firstName) && Objects.equals(lastName, student.lastName) && Objects.equals(age, student.age) && Objects.equals(email, student.email) && Objects.equals(selfDescription, student.selfDescription) && Objects.equals(projectDescription, student.projectDescription) && Objects.equals(image, student.image) && Objects.equals(technologies, student.technologies);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, age, email, selfDescription, projectDescription, image, technologies);
    }
}