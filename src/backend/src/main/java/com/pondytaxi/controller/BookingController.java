
package com.pondytaxi.controller;

import com.pondytaxi.dto.BookingRequest;
import com.pondytaxi.dto.BookingResponse;
import com.pondytaxi.dto.FareEstimateRequest;
import com.pondytaxi.dto.FareEstimateResponse;
import com.pondytaxi.model.BookingStatus;
import com.pondytaxi.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;
    
    @PostMapping
    public ResponseEntity<BookingResponse> createBooking(@Valid @RequestBody BookingRequest request) {
        BookingResponse response = bookingService.createBooking(request);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/{bookingId}")
    public ResponseEntity<BookingResponse> getBooking(@PathVariable String bookingId) {
        BookingResponse response = bookingService.getBookingByBookingId(bookingId);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/email/{email}")
    public ResponseEntity<List<BookingResponse>> getBookingsByEmail(@PathVariable String email) {
        List<BookingResponse> bookings = bookingService.getBookingsByEmail(email);
        return ResponseEntity.ok(bookings);
    }
    
    @GetMapping("/phone/{phone}")
    public ResponseEntity<List<BookingResponse>> getBookingsByPhone(@PathVariable String phone) {
        List<BookingResponse> bookings = bookingService.getBookingsByPhone(phone);
        return ResponseEntity.ok(bookings);
    }
    
    @PatchMapping("/{bookingId}/status")
    public ResponseEntity<BookingResponse> updateBookingStatus(
            @PathVariable String bookingId, 
            @RequestParam BookingStatus status) {
        BookingResponse response = bookingService.updateBookingStatus(bookingId, status);
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/estimate-fare")
    public ResponseEntity<FareEstimateResponse> estimateFare(@Valid @RequestBody FareEstimateRequest request) {
        FareEstimateResponse response = bookingService.estimateFare(request);
        return ResponseEntity.ok(response);
    }
}
