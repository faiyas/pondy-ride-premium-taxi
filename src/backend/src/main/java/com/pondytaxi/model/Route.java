
package com.pondytaxi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "routes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Source is required")
    private String source;
    
    @NotBlank(message = "Destination is required")
    private String destination;
    
    @NotNull(message = "Distance is required")
    @Positive(message = "Distance must be positive")
    private Double distanceInKm;
    
    @NotNull(message = "Estimated time is required")
    @Positive(message = "Estimated time must be positive")
    private Integer estimatedTimeInMinutes;
}
