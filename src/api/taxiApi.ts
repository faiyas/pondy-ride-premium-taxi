
import axios from 'axios';

// API base URL - change this to your actual backend URL
const API_BASE_URL = 'http://localhost:8080/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Booking related API calls
export const bookingApi = {
  // Create a new booking
  createBooking: async (bookingData: any) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },
  
  // Get booking details by booking ID
  getBookingById: async (bookingId: string) => {
    const response = await api.get(`/bookings/${bookingId}`);
    return response.data;
  },
  
  // Get all bookings by email address
  getBookingsByEmail: async (email: string) => {
    const response = await api.get(`/bookings/email/${email}`);
    return response.data;
  },
  
  // Get all bookings by phone number
  getBookingsByPhone: async (phone: string) => {
    const response = await api.get(`/bookings/phone/${phone}`);
    return response.data;
  },
  
  // Update booking status
  updateBookingStatus: async (bookingId: string, status: string) => {
    const response = await api.patch(`/bookings/${bookingId}/status?status=${status}`);
    return response.data;
  },
  
  // Calculate fare estimate
  estimateFare: async (fareData: any) => {
    const response = await api.post('/bookings/estimate-fare', fareData);
    return response.data;
  },
};

// Contact related API calls
export const contactApi = {
  // Submit contact form
  submitContactForm: async (contactData: any) => {
    const response = await api.post('/contacts', contactData);
    return response.data;
  },
  
  // Get all contact messages (admin)
  getAllContactMessages: async () => {
    const response = await api.get('/contacts');
    return response.data;
  },
  
  // Get unread contact messages (admin)
  getUnreadMessages: async () => {
    const response = await api.get('/contacts/unread');
    return response.data;
  },
  
  // Mark message as read
  markAsRead: async (id: number) => {
    const response = await api.patch(`/contacts/${id}/read`);
    return response.data;
  },
};

// Vehicle related API calls
export const vehicleApi = {
  // Get all vehicles
  getAllVehicles: async () => {
    const response = await api.get('/vehicles');
    return response.data;
  },
  
  // Get active vehicles only
  getActiveVehicles: async () => {
    const response = await api.get('/vehicles/active');
    return response.data;
  },
  
  // Get vehicle by ID
  getVehicleById: async (id: number) => {
    const response = await api.get(`/vehicles/${id}`);
    return response.data;
  },
  
  // Add a new vehicle
  addVehicle: async (vehicleData: any) => {
    const response = await api.post('/vehicles', vehicleData);
    return response.data;
  },
  
  // Update an existing vehicle
  updateVehicle: async (id: number, vehicleData: any) => {
    const response = await api.put(`/vehicles/${id}`, vehicleData);
    return response.data;
  },
  
  // Delete a vehicle
  deleteVehicle: async (id: number) => {
    const response = await api.delete(`/vehicles/${id}`);
    return response.data;
  },
};

// Export the combined API
const taxiApi = {
  booking: bookingApi,
  contact: contactApi,
  vehicle: vehicleApi,
};

export default taxiApi;
