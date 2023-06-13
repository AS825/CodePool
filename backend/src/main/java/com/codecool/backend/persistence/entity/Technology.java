package com.codecool.backend.persistence.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Technology {
    @Id
    @GeneratedValue
    private long id;

    @Column(length = 1000000)
    private String image;

    public Technology(String image) {
        this.image = image;
    }

    public Technology() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Technology that = (Technology) o;
        return id == that.id && Objects.equals(image, that.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, image);
    }
}
