
package com.pondytaxi.service;

import com.pondytaxi.model.Vehicle;
import com.pondytaxi.repository.VehicleRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }
    
    public List<Vehicle> getActiveVehicles() {
        return vehicleRepository.findByActive(true);
    }
    
    public Vehicle getVehicleById(Long id) {
        return vehicleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Vehicle not found with id: " + id));
    }
    
    public Vehicle saveVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }
    
    public Vehicle updateVehicle(Long id, Vehicle vehicleDetails) {
        Vehicle vehicle = getVehicleById(id);
        vehicle.setName(vehicleDetails.getName());
        vehicle.setCapacity(vehicleDetails.getCapacity());
        vehicle.setLuggage(vehicleDetails.getLuggage());
        vehicle.setRatePerKm(vehicleDetails.getRatePerKm());
        vehicle.setMinFare(vehicleDetails.getMinFare());
        vehicle.setImageUrl(vehicleDetails.getImageUrl());
        vehicle.setAirConditioned(vehicleDetails.isAirConditioned());
        vehicle.setActive(vehicleDetails.isActive());
        return vehicleRepository.save(vehicle);
    }
    
    public void deleteVehicle(Long id) {
        Vehicle vehicle = getVehicleById(id);
        vehicleRepository.delete(vehicle);
    }
}
