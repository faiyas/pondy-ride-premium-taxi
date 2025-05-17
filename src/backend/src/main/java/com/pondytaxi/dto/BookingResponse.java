
package com.pondytaxi.dto;

import com.pondytaxi.model.BookingStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {
    private String bookingId;
    private String customerName;
    private String phone;
    private String email;
    private String pickupDate;
    private String pickupTime;
    private String pickupLocation;
    private String dropLocation;
    private String vehicleType;
    private String specialInstructions;
    private Double estimatedFare;
    private Double distance;
    private BookingStatus status;
    private String createdAt;
}
