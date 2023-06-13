package com.codecool.backend.population;

import com.codecool.backend.io.FileReader;
import com.codecool.backend.model.entity.Graduate;
import com.codecool.backend.model.entity.OfficePersonal;
import com.codecool.backend.persistence.entity.Company;
import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.entity.Technology;
import com.codecool.backend.persistence.repository.*;
import com.codecool.backend.reader.*;

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
            OfficePersonalRepository officePersonalRepository,
            TechnologyRepository technologyRepository) {
        return args -> {
            String companyPath = "src/main/resources/csvFiles/Companies-Mock.csv";
            String studentsPath = "src/main/resources/csvFiles/Students-Mock.csv";
            String graduatesPath = "src/main/resources/csvFiles/Graduates.csv";
            String officePersonalPath = "src/main/resources/csvFiles/OfficePersonal.csv";
            String technologiesPath = "src/main/resources/csvFiles/Technologies.csv";
            FileReader fileReader = new FileReader();
            DataReader dataReader = new DataReader(fileReader);
            Base64Converter base64Converter = new Base64Converter();
            StudentTransformer studentTransformer = new StudentTransformer(base64Converter);
            CompanyTransformer companyTransformer = new CompanyTransformer();
            OfficePersonalTransformer officePersonalTransformer = new OfficePersonalTransformer(base64Converter);
            GraduateTransformer graduateTransformer = new GraduateTransformer(base64Converter);
            TechnologyTransformer technologyTransformer = new TechnologyTransformer(base64Converter);
            List<Student> students = dataReader.read(studentsPath, studentTransformer);
            List<Company> companies = dataReader.read(companyPath, companyTransformer);
            List<Graduate> graduates = dataReader.read(graduatesPath, graduateTransformer);
            List<OfficePersonal> officePersonal = dataReader.read(officePersonalPath, officePersonalTransformer);
            List<Technology> technologies = dataReader.read(technologiesPath, technologyTransformer);

            technologyRepository.saveAll(technologies);
            companyRepository.saveAll(companies);
            studentRepository.saveAll(students);
            graduateRepository.saveAll(graduates);
            officePersonalRepository.saveAll(officePersonal);
        };
    }
}
