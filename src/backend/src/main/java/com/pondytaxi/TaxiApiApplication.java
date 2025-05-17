
package com.pondytaxi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
public class TaxiApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(TaxiApiApplication.class, args);
    }
}
