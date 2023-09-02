package com.li.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmergencyCallController {
    @Autowired
    JavaMailSenderImpl mailSender;
    @GetMapping("/emergency")
    public void emergencyCall(){

        //一个简单邮件
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setSubject("紧急呼救");
        simpleMailMessage.setText("我遇到了困难，请求你的帮助");
        simpleMailMessage.setTo("2090037702@qq.com");
        simpleMailMessage.setFrom("2090037702@qq.com");

        mailSender.send(simpleMailMessage);


    }

}
