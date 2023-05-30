package com.codecool.backend.reader;

import java.io.IOException;

public interface DataTransformer<E> {
    E transform(String line) throws IOException;
}