package com.codecool.backend.persistence.entity;

import jakarta.persistence.*;

@Entity
public class Graduate {
    @Id
    @GeneratedValue
    private long id;
    private String firstName;
    private String lastName;
    private String employer;
    private String position;
    @Column(length = 1000000)
    private String imageSource;

    public Graduate(String firstName, String lastName, String employer, String position, String imgSrc) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employer = employer;
        this.position = position;
        this.imageSource = imgSrc;
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

    public String getImageSource() {
        return imageSource;
    }

    public Graduate() {

    }
}
