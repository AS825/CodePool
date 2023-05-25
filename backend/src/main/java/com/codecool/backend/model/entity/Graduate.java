package com.codecool.backend.model.entity;

import jakarta.persistence.*;

@Entity
@Table(name="graduates")
public class Graduates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private final String firstName;
    private final String lastName;
    private final String employer;
    private final String position;
    private final String imgSrc;

    public Graduates(String firstName, String lastName, String employer, String position, String imgSrc) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employer = employer;
        this.position = position;
        this.imgSrc = imgSrc;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmployer() {
        return employer;
    }

    public String getPosition() {
        return position;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public Graduates() {

    }
}
