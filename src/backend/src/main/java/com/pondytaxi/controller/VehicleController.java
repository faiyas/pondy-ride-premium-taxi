
package com.pondytaxi.controller;

import com.pondytaxi.model.Vehicle;
import com.pondytaxi.service.VehicleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicles")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class VehicleController {

    private final VehicleService vehicleService;
    
    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        return ResponseEntity.ok(vehicleService.getAllVehicles());
    }
    
    @GetMapping("/active")
    public ResponseEntity<List<Vehicle>> getActiveVehicles() {
        return ResponseEntity.ok(vehicleService.getActiveVehicles());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
        return ResponseEntity.ok(vehicleService.getVehicleById(id));
    }
    
    @PostMapping
    public ResponseEntity<Vehicle> createVehicle(@Valid @RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.saveVehicle(vehicle));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @Valid @RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(vehicleService.updateVehicle(id, vehicle));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteVehicle(id);
        return ResponseEntity.noContent().build();
    }
}
