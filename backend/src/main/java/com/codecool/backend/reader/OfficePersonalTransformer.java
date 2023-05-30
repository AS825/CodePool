package com.codecool.backend.reader;

import com.codecool.backend.model.entity.OfficePersonal;
import com.codecool.backend.service.converter.Base64Converter;

import java.io.IOException;

public class OfficePersonalTransformer implements DataTransformer<OfficePersonal> {

    private final Base64Converter base64Converter;

    public OfficePersonalTransformer(Base64Converter base64Converter) {
        this.base64Converter = base64Converter;
    }

    @Override
    public OfficePersonal transform(String line) throws IOException {
        String[] columns = line.split(",");
        String firstName = columns[0];
        String lastName = columns[1];
        String position = columns[2];
        String email = columns[3];
        String image = base64Converter.convertImgToBase64String(columns[4]);
        return new OfficePersonal(firstName, lastName, position, email, image);
    }
}
