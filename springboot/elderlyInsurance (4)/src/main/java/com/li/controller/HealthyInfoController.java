package com.li.controller;

import com.li.mapper.HealthyInfoMapper;
import com.li.pojo.HealthyInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthyInfoController implements HealthyInfoMapper {

    @Autowired
    HealthyInfoMapper healthyInfoMapper;

    @GetMapping("/queryHealthyInfoById/{id}")
    @Override
    public HealthyInfo queryHealthyInfoById(@PathVariable("id") int id) {
        HealthyInfo healthyInfo = healthyInfoMapper.queryHealthyInfoById(id);
        return healthyInfo;
    }
}
