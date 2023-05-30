package com.codecool.backend.population;

import com.codecool.backend.model.entity.Company;
import com.codecool.backend.model.entity.Student;
import com.codecool.backend.repository.CompanyRepository;
import com.codecool.backend.repository.StudentRepository;
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

    private List<OfficePersonal> createOfficePersonal() throws IOException {
        Base64Converter base64Converter = new Base64Converter();
        return List.of(
                new OfficePersonal("Sigrid","Hantusch-Taferner","CountryManager","1234", base64Converter.convertImgToBase64String("/home/bernadette/CodeCool-projects/Modul4/CodePool/backend/img/Sigrid.png")),
                new OfficePersonal("Lydia","Jeschko","Buisniss Development Austria","fake@email.com", base64Converter.convertImgToBase64String("/home/bernadette/CodeCool-projects/Modul4/CodePool/backend/img/Lydia.png")),
                new OfficePersonal("Isabella Kristina","Miglinci","Marketing & Press","fake@email.com", base64Converter.convertImgToBase64String("/home/bernadette/CodeCool-projects/Modul4/CodePool/backend/img/Isabella.png"))
        );
    }

    private List<Graduate> createGraduates() throws IOException {
        Base64Converter base64Converter = new Base64Converter();
        return List.of(
                new Graduate("Mark", "Hartleib", "Schrack Technik", "Junior ERP Developer", base64Converter.convertImgToBase64String("/home/bernadette/CodeCool-projects/Modul4/CodePool/backend/img/Mark.png")),
                new Graduate("Roman", "Fann", "Smatrics", "Junior Developer", base64Converter.convertImgToBase64String("/home/bernadette/CodeCool-projects/Modul4/CodePool/backend/img/Roman.png"))
        );
    }

}
