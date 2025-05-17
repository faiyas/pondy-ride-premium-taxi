
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CustomerInfoFields } from "./CustomerInfoFields";
import { DateTimeFields } from "./DateTimeFields";
import { LocationVehicleFields } from "./LocationVehicleFields";
import { ConfirmationDialog } from "./ConfirmationDialog";

export const BookingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate booking ID
    const generatedId = 'BK' + Date.now().toString().slice(-6);
    setBookingId(generatedId);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      
      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setDate("");
      setTime("");
      setPickup("");
      setDrop("");
      setVehicle("");
      setInstructions("");
    }, 1500);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 md:p-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomerInfoFields 
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
          />
          
          <DateTimeFields 
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
          />
          
          <LocationVehicleFields 
            pickup={pickup}
            setPickup={setPickup}
            drop={drop}
            setDrop={setDrop}
            vehicle={vehicle}
            setVehicle={setVehicle}
            instructions={instructions}
            setInstructions={setInstructions}
          />
        </div>
        
        <Button
          type="submit"
          className="w-full mt-8 bg-taxi-primary text-taxi-dark hover:bg-taxi-primary/90 font-medium py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Book Now"}
        </Button>
      </form>
      
      <ConfirmationDialog 
        showConfirmation={showConfirmation}
        setShowConfirmation={setShowConfirmation}
        bookingId={bookingId}
        name={name}
        date={date}
        time={time}
        pickup={pickup}
        drop={drop}
        vehicle={vehicle}
      />
    </>
  );
};
