
package com.pondytaxi.repository;

import com.pondytaxi.model.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
    Optional<Route> findBySourceAndDestination(String source, String destination);
}
