
package com.pondytaxi.repository;

import com.pondytaxi.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findByActive(boolean active);
    List<Vehicle> findByNameContainingIgnoreCase(String name);
}
