package com.li.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HealthyInfo {
    private int id;
    private int highpressure;
    private int lowpressure;
    private int heartrate;
    private float temperature;
    private float bloodsugar;
    private String report;
}
