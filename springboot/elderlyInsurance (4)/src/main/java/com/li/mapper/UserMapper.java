package com.li.mapper;

import com.li.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
     void addUser(String friendphone,String friendmail,String mymail);
     User getUserById(int id);
     void updateUser(String friendphone,String friendmail,String mymail);
}
