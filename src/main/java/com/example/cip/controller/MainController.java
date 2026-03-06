package com.example.cip.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    // A simple endpoint to test if the backend itself is working
    @GetMapping("/api/health")
    @ResponseBody
    public String health() {
        return "CIP Application is running successfully!";
    }
}
