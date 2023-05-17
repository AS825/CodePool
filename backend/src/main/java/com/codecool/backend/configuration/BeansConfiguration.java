package com.codecool.backend.configuration;


import com.codecool.backend.model.HelloWorld;
import com.codecool.backend.model.StudentStorage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.HashSet;

@Configuration
public class BeansConfiguration {

    @Bean
    HelloWorld helloWorld() {
        return new HelloWorld();
    }
   @Bean
    StudentStorage studentStorage() {
      return new StudentStorage();
    }
}
