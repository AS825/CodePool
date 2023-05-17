package com.codecool.backend.model;

import java.util.List;

public record Student(int id,String name, String title, List<String> tasks, String imgsrc) { }
