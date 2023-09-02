package com.li.controller;

import com.li.mapper.MedicineMapper;
import com.li.pojo.Medicine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class MedicineController implements MedicineMapper {
    @Autowired
    private MedicineMapper medicineMapper;


    @Override
    @GetMapping("/queryAllMedicine")
    public List<Medicine> queryAllMedicine() {
        List<Medicine> medicineList = medicineMapper.queryAllMedicine();
        return medicineList;
    }

    @Override
    @GetMapping("/queryMedicineById/{id}")
    public Medicine queryMedicineById(@PathVariable("id") int id) {
        Medicine medicine = medicineMapper.queryMedicineById(id);
        return medicine;
    }

    @Override
    @GetMapping("/addMedicine/{title}/{category}/{description}")
    public int addMedicine(@PathVariable("title") String title,@PathVariable("category") String category,@PathVariable("description") String description) {
        medicineMapper.addMedicine(title, category, description);
        return 1;
    }


}
