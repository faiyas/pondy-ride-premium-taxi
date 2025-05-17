
package com.pondytaxi.service;

import com.pondytaxi.dto.ContactRequest;
import com.pondytaxi.model.Contact;
import com.pondytaxi.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository contactRepository;
    
    public Contact saveContactMessage(ContactRequest request) {
        Contact contact = new Contact();
        contact.setName(request.getName());
        contact.setEmail(request.getEmail());
        contact.setSubject(request.getSubject());
        contact.setMessage(request.getMessage());
        return contactRepository.save(contact);
    }
    
    public List<Contact> getAllContactMessages() {
        return contactRepository.findAll();
    }
    
    public List<Contact> getUnreadMessages() {
        return contactRepository.findByRead(false);
    }
    
    public Contact markAsRead(Long id) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact message not found"));
        contact.setRead(true);
        return contactRepository.save(contact);
    }
}
