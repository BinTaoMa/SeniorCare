package com.li.controller;

import com.li.mapper.DoctorMapper;
import com.li.pojo.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;


@RestController
public class DoctorController {

    @Autowired
    private DoctorMapper doctorMapper;


    @RequestMapping("/queryAllDoctor")
    public List<Doctor> queryAllDoctor() {
        List<Doctor> doctorList = doctorMapper.queryAllDoctor();
        for (Doctor doctor : doctorList) {
            System.out.println(doctor);
        }
        return doctorList;
    }


    @RequestMapping("/queryDoctorByName/{name}")
    public List<Doctor> queryDoctorByName(@PathVariable("name") String name) {
        List<Doctor> doctorList = doctorMapper.queryDoctorByName(name);
        return doctorList;
    }

}
