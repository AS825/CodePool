package com.codecool.backend.reader;

public interface DataTransformer<E> {
    E transform(String line);
}