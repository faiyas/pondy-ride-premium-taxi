
package com.pondytaxi.service;

import com.pondytaxi.dto.BookingRequest;
import com.pondytaxi.dto.BookingResponse;
import com.pondytaxi.dto.FareEstimateRequest;
import com.pondytaxi.dto.FareEstimateResponse;
import com.pondytaxi.model.Booking;
import com.pondytaxi.model.BookingStatus;
import com.pondytaxi.repository.BookingRepository;
import com.pondytaxi.repository.RouteRepository;
import com.pondytaxi.repository.VehicleRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final RouteRepository routeRepository;
    private final VehicleRepository vehicleRepository;
    
    public BookingResponse createBooking(BookingRequest request) {
        Booking booking = new Booking();
        booking.setBookingId("BK" + UUID.randomUUID().toString().substring(0, 6).toUpperCase());
        booking.setCustomerName(request.getCustomerName());
        booking.setPhone(request.getPhone());
        booking.setEmail(request.getEmail());
        booking.setPickupDate(LocalDate.parse(request.getPickupDate()));
        booking.setPickupTime(LocalTime.parse(request.getPickupTime()));
        booking.setPickupLocation(request.getPickupLocation());
        booking.setDropLocation(request.getDropLocation());
        booking.setVehicleType(request.getVehicleType());
        booking.setSpecialInstructions(request.getSpecialInstructions());
        
        // Calculate fare estimate
        FareEstimateRequest fareRequest = new FareEstimateRequest();
        fareRequest.setPickupLocation(request.getPickupLocation());
        fareRequest.setDropLocation(request.getDropLocation());
        fareRequest.setVehicleType(request.getVehicleType());
        fareRequest.setJourneyType("one_way"); // Default to one-way
        
        FareEstimateResponse fareEstimate = estimateFare(fareRequest);
        booking.setEstimatedFare(fareEstimate.getTotalFare());
        booking.setDistance(fareEstimate.getDistance());
        
        Booking savedBooking = bookingRepository.save(booking);
        return convertToBookingResponse(savedBooking);
    }
    
    public BookingResponse getBookingByBookingId(String bookingId) {
        Booking booking = bookingRepository.findByBookingId(bookingId)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with ID: " + bookingId));
        return convertToBookingResponse(booking);
    }
    
    public List<BookingResponse> getBookingsByEmail(String email) {
        List<Booking> bookings = bookingRepository.findByEmail(email);
        return bookings.stream()
                .map(this::convertToBookingResponse)
                .collect(Collectors.toList());
    }
    
    public List<BookingResponse> getBookingsByPhone(String phone) {
        List<Booking> bookings = bookingRepository.findByPhone(phone);
        return bookings.stream()
                .map(this::convertToBookingResponse)
                .collect(Collectors.toList());
    }
    
    public BookingResponse updateBookingStatus(String bookingId, BookingStatus status) {
        Booking booking = bookingRepository.findByBookingId(bookingId)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with ID: " + bookingId));
        booking.setStatus(status);
        Booking updatedBooking = bookingRepository.save(booking);
        return convertToBookingResponse(updatedBooking);
    }
    
    public FareEstimateResponse estimateFare(FareEstimateRequest request) {
        // In a real application, you would use a service like Google Maps API
        // For now, let's simulate by using predefined distances between locations
        double distance = getEstimatedDistance(request.getPickupLocation(), request.getDropLocation());
        
        double ratePerKm = getVehicleRate(request.getVehicleType());
        
        double multiplier = "round_trip".equals(request.getJourneyType()) ? 2.0 : 1.0;
        
        // Apply distance and price calculation
        double adjustedDistance = distance * multiplier;
        double baseFare = adjustedDistance * ratePerKm;
        double tax = baseFare * 0.05; // 5% tax
        double totalFare = baseFare + tax;
        
        return new FareEstimateResponse(adjustedDistance, baseFare, tax, totalFare);
    }
    
    private double getEstimatedDistance(String source, String destination) {
        // Try to find the route in the database
        return routeRepository.findBySourceAndDestination(source, destination)
                .map(route -> route.getDistanceInKm())
                .orElse(50.0); // Default fallback distance if route not found
    }
    
    private double getVehicleRate(String vehicleType) {
        // Hardcoded rates for simplicity
        return switch (vehicleType.toLowerCase()) {
            case "sedan" -> 14.0;
            case "suv" -> 16.0;
            case "tempo" -> 22.0;
            case "bus" -> 35.0;
            default -> 12.0;
        };
    }
    
    private BookingResponse convertToBookingResponse(Booking booking) {
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
        
        return new BookingResponse(
                booking.getBookingId(),
                booking.getCustomerName(),
                booking.getPhone(),
                booking.getEmail(),
                booking.getPickupDate().format(dateFormatter),
                booking.getPickupTime().format(timeFormatter),
                booking.getPickupLocation(),
                booking.getDropLocation(),
                booking.getVehicleType(),
                booking.getSpecialInstructions(),
                booking.getEstimatedFare(),
                booking.getDistance(),
                booking.getStatus(),
                booking.getCreatedAt().format(dateFormatter)
        );
    }
}
