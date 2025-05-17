
package com.pondytaxi.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class FareEstimateRequest {
    @NotBlank(message = "Pickup location is required")
    private String pickupLocation;
    
    @NotBlank(message = "Drop location is required")
    private String dropLocation;
    
    @NotBlank(message = "Vehicle type is required")
    private String vehicleType;
    
    @NotBlank(message = "Journey type is required")
    private String journeyType;
}
