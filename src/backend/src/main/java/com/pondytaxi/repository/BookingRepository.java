
package com.pondytaxi.repository;

import com.pondytaxi.model.Booking;
import com.pondytaxi.model.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    Optional<Booking> findByBookingId(String bookingId);
    List<Booking> findByEmail(String email);
    List<Booking> findByPhone(String phone);
    List<Booking> findByStatus(BookingStatus status);
    List<Booking> findByPickupDate(LocalDate pickupDate);
}
