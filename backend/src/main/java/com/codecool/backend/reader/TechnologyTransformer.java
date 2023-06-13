package com.codecool.backend.reader;

import com.codecool.backend.persistence.entity.Technology;
import com.codecool.backend.service.converter.Base64Converter;

import java.io.IOException;

public class TechnologyTransformer implements DataTransformer<Technology> {
    private final Base64Converter base64Converter;

    public TechnologyTransformer(Base64Converter base64Converter) {
        this.base64Converter = base64Converter;
    }

    @Override
    public Technology transform(String filepath) throws IOException {
        String image = base64Converter.convertImgToBase64String(filepath);
        return new Technology(image);
    }
}
