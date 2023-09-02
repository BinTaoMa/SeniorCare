package com.li.mapper;

import com.li.pojo.HealthyInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface HealthyInfoMapper {
    HealthyInfo queryHealthyInfoById(int id);
}
