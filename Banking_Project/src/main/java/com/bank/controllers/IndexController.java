package com.bank.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

//@Controller
//public class IndexController {
//    @RequestMapping("/")
//    public ModelAndView getIndex(){
//        ModelAndView getIndexPage = new ModelAndView("index");
//        getIndexPage.addObject("PageTitle", "Home");
//        System.out.println("In Index Page Controller");
//        return getIndexPage;
//    }
//}

@RestController
@CrossOrigin(origins="*")
public class IndexController {

    @RequestMapping("/welcome")
    public String welcome() {
        String text = "this is private page";
        text += "this page is not allowed to unauthenticated users";
        return text;
    }


}