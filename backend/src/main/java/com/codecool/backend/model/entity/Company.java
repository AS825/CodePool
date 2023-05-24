package com.codecool.backend.model.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "companies")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String contactMail;

    public Company(String name, String contactMail) {
        this.name = name;
        this.contactMail = contactMail;
    }
    public Company() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactMail() {
        return contactMail;
    }

    public void setContactMail(String contactMail) {
        this.contactMail = contactMail;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, contactMail);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Company company = (Company) obj;
        return id == company.id && Objects.equals(name, company.name) && Objects.equals(contactMail, company.contactMail);
    }
}
