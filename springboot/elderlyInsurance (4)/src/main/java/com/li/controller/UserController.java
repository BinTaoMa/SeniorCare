package com.li.controller;

import com.li.mapper.UserMapper;
import com.li.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController implements UserMapper{
    @Autowired
    private UserMapper userMapper;

    @Override
    @GetMapping("/addUser/{friendphone}/{friendmail}/{mymail}")
    public void addUser(@PathVariable("friendphone") String friendphone, @PathVariable("friendmail") String friendmail, String mymail) {
          userMapper.addUser(friendphone,friendmail,mymail);
    }

    @Override
    public User getUserById(int id) {
        return null;
    }

    @Override
    public void updateUser(String friendphone,String friendmail, String mymail) {

    }
}
