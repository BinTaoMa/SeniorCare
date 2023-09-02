package com.li.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Medicine {
    private int id;
    private Date time;
    private String title;
    private String category;
    private String description;
    private int  isdone;
}
