package com.li.mapper;

import com.li.pojo.Doctor;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DoctorMapper {
    List<Doctor> queryAllDoctor();
    List<Doctor> queryDoctorByName(String name);
}
