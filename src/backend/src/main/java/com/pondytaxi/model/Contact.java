
package com.pondytaxi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "contacts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Name is required")
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;
    
    @NotBlank(message = "Subject is required")
    private String subject;
    
    @NotBlank(message = "Message is required")
    @Column(length = 1000)
    private String message;
    
    private boolean read = false;
    
    @Column(updatable = false)
    private LocalDate createdAt;
    
    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDate.now();
    }
}
