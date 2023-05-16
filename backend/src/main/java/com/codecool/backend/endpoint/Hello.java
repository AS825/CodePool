package com.codecool.backend.endpoint;

import com.codecool.backend.model.HelloWorld;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class Hello {

    @GetMapping
    public String sayHello() {
        HelloWorld helloWorld = new HelloWorld();
       return helloWorld.sayHallo();
    }
}
