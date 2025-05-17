
package com.pondytaxi.repository;

import com.pondytaxi.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    List<Contact> findByRead(boolean read);
    List<Contact> findByEmail(String email);
}
