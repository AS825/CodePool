package com.codecool.backend.model.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "graduates")
public class Graduate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String employer;
    private String position;
    @Column(length = 1000000)
    //@Column(length = 1000000)
    private String imgSrc;

    public Graduate(String firstName, String lastName, String employer, String position, String imgSrc) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employer = employer;
        this.position = position;
        this.imgSrc = imgSrc;
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

    public Graduate() {

    }
}
