
# Pondy DropTaxi - Backend API

This is the backend API for the Pondy DropTaxi application built with Spring Boot and MySQL.

## Prerequisites

- Java 17 or higher
- Maven 3.8.x or higher
- MySQL 8.0 or higher

## Setup Instructions

1. **Database Setup**

   Make sure MySQL is installed and running. The application will automatically create the `pondytaxi` database if it doesn't exist.

   Update the database connection details in `src/main/resources/application.properties` if needed:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/pondytaxi?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC
   spring.datasource.username=root
   spring.datasource.password=root
   ```

2. **Build the Application**

   ```bash
   cd src/backend
   mvn clean install
   ```

3. **Run the Application**

   ```bash
   mvn spring-boot:run
   ```

   The API will be available at `http://localhost:8080/api`

## API Endpoints

### Booking API

- `POST /api/bookings` - Create a new booking
- `GET /api/bookings/{bookingId}` - Get booking details by ID
- `GET /api/bookings/email/{email}` - Get all bookings by email
- `GET /api/bookings/phone/{phone}` - Get all bookings by phone number
- `PATCH /api/bookings/{bookingId}/status` - Update booking status
- `POST /api/bookings/estimate-fare` - Estimate fare for a route

### Contact API

- `POST /api/contacts` - Submit a contact form
- `GET /api/contacts` - Get all contact messages (admin)
- `GET /api/contacts/unread` - Get unread contact messages (admin)
- `PATCH /api/contacts/{id}/read` - Mark a contact message as read (admin)

### Vehicle API

- `GET /api/vehicles` - Get all vehicles
- `GET /api/vehicles/active` - Get all active vehicles
- `GET /api/vehicles/{id}` - Get vehicle by ID
- `POST /api/vehicles` - Add a new vehicle
- `PUT /api/vehicles/{id}` - Update a vehicle
- `DELETE /api/vehicles/{id}` - Delete a vehicle

## Frontend Integration

To connect the React frontend to this API:

1. Update the API base URL in your frontend configuration
2. Use the API endpoints as documented above
3. Handle CORS if needed (already configured on the backend)
