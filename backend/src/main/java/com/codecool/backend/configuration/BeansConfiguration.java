package com.codecool.backend.configuration;


import com.codecool.backend.model.HelloWorld;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeansConfiguration {

    @Bean
    HelloWorld helloWorld() {
      return new HelloWorld();
    }
}
