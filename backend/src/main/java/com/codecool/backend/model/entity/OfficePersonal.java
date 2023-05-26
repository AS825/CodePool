package com.codecool.backend.model.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "officepersonal")
public class OfficePersonal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private  String firstName;
    private  String lastName;
    private  String jobDescription;
    private  String contactData;

    public OfficePersonal(String firstName, String lastName, String jobDescription, String contactData) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobDescription = jobDescription;
        this.contactData = contactData;
    }

    public OfficePersonal() {

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
