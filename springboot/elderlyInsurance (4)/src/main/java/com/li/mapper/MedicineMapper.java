package com.li.mapper;

import com.li.pojo.Medicine;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;
import java.util.List;

@Mapper
public interface MedicineMapper {
     List<Medicine> queryAllMedicine();
     Medicine queryMedicineById(int id);
     int addMedicine(String title,String category,String description);
}
