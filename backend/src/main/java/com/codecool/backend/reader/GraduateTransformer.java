package com.codecool.backend.reader;

import com.codecool.backend.model.entity.Graduate;
import com.codecool.backend.service.converter.Base64Converter;

import java.io.IOException;

public class GraduateTransformer implements DataTransformer<Graduate> {

        private final Base64Converter base64Converter;

        public GraduateTransformer(Base64Converter base64Converter) {
            this.base64Converter = base64Converter;
    }

    @Override
    public Graduate transform(String line) throws IOException{
            String[] columns = line.split(",");
            String firstName = columns[0];
            String lastName = columns[1];
            String companyName = columns[2];
            String position = columns[3];
            String image = base64Converter.convertImgToBase64String(columns[4]);
            return new Graduate(firstName, lastName, companyName, position, image);
    }
}
