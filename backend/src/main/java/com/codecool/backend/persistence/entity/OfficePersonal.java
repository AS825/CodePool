package com.codecool.backend.persistence.entity;

import jakarta.persistence.*;

@Entity
public class OfficePersonal {
    @Id
    @GeneratedValue
    private long id;
    private String firstName;
    private String lastName;
    private String jobDescription;
    private String contactData;
    @Column(length = 1000000)
    private String imageSource;

    public OfficePersonal(String firstName, String lastName, String jobDescription, String contactData, String imageSource) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobDescription = jobDescription;
        this.contactData = contactData;
        this.imageSource = imageSource;
    }

    public OfficePersonal() {

    }

    public String getImageSource() {
        return imageSource;
    }

    public void setImageSource(String imageSource) {
        this.imageSource = imageSource;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public void setContactData(String contactData) {
        this.contactData = contactData;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public String getContactData() {
        return contactData;
    }
}
