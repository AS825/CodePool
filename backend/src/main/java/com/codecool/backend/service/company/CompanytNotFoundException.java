package com.codecool.backend.service.company;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND )
public class CompanytNotFoundException extends Exception{

}
