
package com.pondytaxi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "bookings")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Booking ID is required")
    private String bookingId;
    
    @NotBlank(message = "Name is required")
    private String customerName;
    
    @NotBlank(message = "Phone is required")
    private String phone;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;
    
    @NotNull(message = "Pickup date is required")
    private LocalDate pickupDate;
    
    @NotNull(message = "Pickup time is required")
    private LocalTime pickupTime;
    
    @NotBlank(message = "Pickup location is required")
    private String pickupLocation;
    
    @NotBlank(message = "Drop location is required")
    private String dropLocation;
    
    @NotBlank(message = "Vehicle type is required")
    private String vehicleType;
    
    private String specialInstructions;
    
    private Double estimatedFare;
    
    private Double distance;
    
    @Enumerated(EnumType.STRING)
    private BookingStatus status = BookingStatus.PENDING;
    
    @Column(updatable = false)
    private LocalDate createdAt;
    
    private LocalDate updatedAt;
    
    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDate.now();
        this.updatedAt = LocalDate.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDate.now();
    }
}
