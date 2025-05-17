
package com.pondytaxi.controller;

import com.pondytaxi.dto.ContactRequest;
import com.pondytaxi.model.Contact;
import com.pondytaxi.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;
    
    @PostMapping
    public ResponseEntity<Contact> saveContactMessage(@Valid @RequestBody ContactRequest request) {
        Contact savedContact = contactService.saveContactMessage(request);
        return ResponseEntity.ok(savedContact);
    }
    
    @GetMapping
    public ResponseEntity<List<Contact>> getAllContactMessages() {
        return ResponseEntity.ok(contactService.getAllContactMessages());
    }
    
    @GetMapping("/unread")
    public ResponseEntity<List<Contact>> getUnreadMessages() {
        return ResponseEntity.ok(contactService.getUnreadMessages());
    }
    
    @PatchMapping("/{id}/read")
    public ResponseEntity<Contact> markAsRead(@PathVariable Long id) {
        return ResponseEntity.ok(contactService.markAsRead(id));
    }
}
