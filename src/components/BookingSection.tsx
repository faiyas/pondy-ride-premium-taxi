
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { toast } from "sonner";

const BookingSection = () => {
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

  const closeConfirmation = () => {
    setShowConfirmation(false);
    toast.success("Booking confirmed! We'll contact you shortly.", {
      description: `Booking ID: ${bookingId}`,
      duration: 5000,
    });
  };

  return (
    <section id="booking" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Taxi</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Quick and easy booking process - Your comfort journey begins here
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 md:p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="customer-name">Your Name</Label>
                <Input
                  id="customer-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="customer-phone">Phone Number</Label>
                <Input
                  id="customer-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="customer-email">Email Address</Label>
                <Input
                  id="customer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="booking-date">Pickup Date</Label>
                <Input
                  id="booking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pickup-time">Pickup Time</Label>
                <Input
                  id="pickup-time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="booking-pickup">Pickup Location</Label>
                <Select value={pickup} onValueChange={setPickup}>
                  <SelectTrigger id="booking-pickup">
                    <SelectValue placeholder="Select Pickup Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pondicherry">Pondicherry</SelectItem>
                    <SelectItem value="auroville">Auroville</SelectItem>
                    <SelectItem value="chennai_airport">Chennai Airport</SelectItem>
                    <SelectItem value="chennai_city">Chennai City</SelectItem>
                    <SelectItem value="kottakuppam">Kottakuppam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="booking-drop">Drop Location</Label>
                <Select value={drop} onValueChange={setDrop}>
                  <SelectTrigger id="booking-drop">
                    <SelectValue placeholder="Select Drop Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pondicherry">Pondicherry</SelectItem>
                    <SelectItem value="auroville">Auroville</SelectItem>
                    <SelectItem value="chennai_airport">Chennai Airport</SelectItem>
                    <SelectItem value="chennai_city">Chennai City</SelectItem>
                    <SelectItem value="mahabalipuram">Mahabalipuram</SelectItem>
                    <SelectItem value="thanjavur">Thanjavur</SelectItem>
                    <SelectItem value="kottakuppam">Kottakuppam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="booking-vehicle">Vehicle Type</Label>
                <Select value={vehicle} onValueChange={setVehicle}>
                  <SelectTrigger id="booking-vehicle">
                    <SelectValue placeholder="Select Vehicle Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan (4 Seater)</SelectItem>
                    <SelectItem value="suv">SUV (6 Seater)</SelectItem>
                    <SelectItem value="tempo">Tempo Traveller (12 Seater)</SelectItem>
                    <SelectItem value="bus">Mini Bus (20 Seater)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="special-instructions">Special Instructions (Optional)</Label>
                <Textarea
                  id="special-instructions"
                  rows={3}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full mt-8 bg-taxi-primary text-taxi-dark hover:bg-taxi-primary/90 font-medium py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Book Now"}
            </Button>
          </form>
        </div>
      </div>
      
      {/* Booking Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              Booking Confirmation
            </DialogTitle>
            <DialogDescription>
              Your booking has been received successfully!
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Booking ID:</span>
              <span>{bookingId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>{name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date & Time:</span>
              <span>{date} at {time}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Route:</span>
              <span>{pickup} to {drop}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Vehicle:</span>
              <span>{vehicle}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            A confirmation message has been sent to your phone and email.
            We will contact you shortly to confirm your booking details.
          </p>
          
          <DialogFooter>
            <Button 
              onClick={closeConfirmation}
              className="w-full bg-taxi-primary text-taxi-dark hover:bg-taxi-primary/90"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BookingSection;
