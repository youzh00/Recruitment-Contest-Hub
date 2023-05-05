package project.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {

    @GetMapping(value = {"/welcome"})
    public String welcome(){
        return "Hello Hassan and Youssef";
    }
}
