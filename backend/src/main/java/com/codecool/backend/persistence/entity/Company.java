package com.codecool.backend.persistence.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Company {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String email;

    public Company(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Company() {
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Company company)) return false;
        return getId() == company.getId() && Objects.equals(getName(), company.getName()) && Objects.equals(getEmail(), company.getEmail());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getEmail());
    }
}
