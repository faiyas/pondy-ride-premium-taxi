
package com.pondytaxi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FareEstimateResponse {
    private Double distance;
    private Double baseFare;
    private Double tax;
    private Double totalFare;
}
