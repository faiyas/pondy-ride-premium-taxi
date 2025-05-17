
package com.pondytaxi.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class BookingRequest {
    @NotBlank(message = "Name is required")
    private String customerName;
    
    @NotBlank(message = "Phone number is required")
    private String phone;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;
    
    @NotBlank(message = "Pickup date is required")
    private String pickupDate;
    
    @NotBlank(message = "Pickup time is required")
    private String pickupTime;
    
    @NotBlank(message = "Pickup location is required")
    private String pickupLocation;
    
    @NotBlank(message = "Drop location is required")
    private String dropLocation;
    
    @NotBlank(message = "Vehicle type is required")
    private String vehicleType;
    
    private String specialInstructions;
}
