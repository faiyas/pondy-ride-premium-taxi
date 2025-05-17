
package com.pondytaxi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vehicles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Name is required")
    private String name;
    
    @NotBlank(message = "Capacity is required")
    private String capacity;
    
    @NotBlank(message = "Luggage capacity is required")
    private String luggage;
    
    @NotNull(message = "Rate per km is required")
    @Positive(message = "Rate must be positive")
    private Double ratePerKm;
    
    @NotNull(message = "Minimum fare is required")
    @Positive(message = "Minimum fare must be positive")
    private Double minFare;
    
    private String imageUrl;
    
    private boolean airConditioned = true;
    
    private boolean active = true;
}
