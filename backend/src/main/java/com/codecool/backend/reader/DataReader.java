package com.codecool.backend.reader;


import com.codecool.backend.io.FileReader;

import java.io.IOException;
import java.util.List;

public class DataReader {
    private final FileReader fileReader;

    public DataReader(FileReader fileReader) {
        this.fileReader = fileReader;
    }

    public <ELEMENT> List<ELEMENT> read(String path, DataTransformer<ELEMENT> dataTransformer) {
        return fileReader.read(path)
                .skip(1)
                .map(line -> {
                    try {
                        return dataTransformer.transform(line);
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                })
                .toList();
    }
}
