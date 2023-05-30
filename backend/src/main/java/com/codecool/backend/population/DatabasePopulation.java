package com.codecool.backend.population;

import com.codecool.backend.io.FileReader;
import com.codecool.backend.persistence.entity.Company;
import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.repository.CompanyRepository;
import com.codecool.backend.persistence.repository.StudentRepository;
import com.codecool.backend.reader.CompanyTransformer;
import com.codecool.backend.reader.DataReader;
import com.codecool.backend.reader.StudentTransformer;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DatabasePopulation {

    @Bean
    ApplicationRunner populate(StudentRepository studentRepository, CompanyRepository companyRepository) {
        return args -> {
            String companyPath = "src/main/resources/csvFiles/Companies-Mock.csv";
            String studentsPath = "src/main/resources/csvFiles/Students-Mock.csv";
            FileReader fileReader = new FileReader();
            DataReader dataReader = new DataReader(fileReader);
            StudentTransformer studentTransformer = new StudentTransformer();
            CompanyTransformer companyTransformer = new CompanyTransformer();
            List<Student> students = dataReader.read(studentsPath, studentTransformer);
            List<Company> companies = dataReader.read(companyPath, companyTransformer);

            companyRepository.saveAll(companies);
            studentRepository.saveAll(students);
        };
    }
}
