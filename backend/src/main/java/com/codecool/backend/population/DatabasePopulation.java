package com.codecool.backend.population;

import com.codecool.backend.persistence.entity.Company;
import com.codecool.backend.persistence.entity.Student;
import com.codecool.backend.persistence.repository.CompanyRepository;
import com.codecool.backend.persistence.repository.StudentRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DatabasePopulation {

    @Bean
    ApplicationRunner populate(StudentRepository studentRepository, CompanyRepository companyRepository) {
        return args -> {
            List<Student> students = createStudents();
            studentRepository.saveAll(students);
            List<Company> companies = createCompanies();
            companyRepository.saveAll(companies);
        };
    }

    private List<Student> createStudents() {
        return List.of(
                new Student("John Doe", "Description for John Doe", "Project for John Doe", "john_doe.jpg"),
                new Student("Jane Smith", "Description for Jane Smith", "Project for Jane Smith", "jane_smith.jpg"),
                new Student("Michael Johnson", "Description for Michael Johnson", "Project for Michael Johnson", "michael_johnson.jpg"),
                new Student("Emily Davis", "Description for Emily Davis", "Project for Emily Davis", "emily_davis.jpg"),
                new Student("Robert Wilson", "Description for Robert Wilson", "Project for Robert Wilson", "robert_wilson.jpg")
        );
    }

    private List<Company> createCompanies() {
        return List.of(
                new Company("Siemens", "siemens@gmail.com"),
                new Company("ÖBB", "oebb@gmail.com")
        );
    }
}
