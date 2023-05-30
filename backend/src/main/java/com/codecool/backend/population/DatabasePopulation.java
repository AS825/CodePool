package com.codecool.backend.population;

import com.codecool.backend.io.FileReader;
import com.codecool.backend.model.entity.Graduate;
import com.codecool.backend.model.entity.OfficePersonal;
import com.codecool.backend.persistence.entity.Company;
import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.repository.GraduateRepository;
import com.codecool.backend.reader.*;
import com.codecool.backend.persistence.repository.CompanyRepository;
import com.codecool.backend.persistence.repository.StudentRepository;

import com.codecool.backend.service.converter.Base64Converter;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DatabasePopulation {

    @Bean
    ApplicationRunner populate(
            StudentRepository studentRepository,
            CompanyRepository companyRepository,
            GraduateRepository graduateRepository,
            com.codecool.backend.repository.OfficePersonalRepository officePersonalRepository) {
        return args -> {
            String companyPath = "src/main/resources/csvFiles/Companies-Mock.csv";
            String studentsPath = "src/main/resources/csvFiles/Students-Mock.csv";
            String graduatesPath = "src/main/resources/csvFiles/Graduates.csv";
            String officePersonalPath = "src/main/resources/csvFiles/OfficePersonal.csv";
            FileReader fileReader = new FileReader();
            DataReader dataReader = new DataReader(fileReader);
            StudentTransformer studentTransformer = new StudentTransformer();
            CompanyTransformer companyTransformer = new CompanyTransformer();
            Base64Converter base64Converter = new Base64Converter();
            OfficePersonalTransformer officePersonalTransformer = new OfficePersonalTransformer(base64Converter);
            GraduateTransformer graduateTransformer = new GraduateTransformer(base64Converter);
            List<Student> students = dataReader.read(studentsPath, studentTransformer);
            List<Company> companies = dataReader.read(companyPath, companyTransformer);
            List<Graduate> graduates = dataReader.read(graduatesPath, graduateTransformer);
            List<OfficePersonal> officePersonal = dataReader.read(officePersonalPath, officePersonalTransformer);

            companyRepository.saveAll(companies);
            studentRepository.saveAll(students);
            graduateRepository.saveAll(graduates);
            officePersonalRepository.saveAll(officePersonal);
        };
    }

}
