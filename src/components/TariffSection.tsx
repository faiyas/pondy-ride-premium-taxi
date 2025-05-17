import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import React from "react";
import { 
  Car, 
  Users as UsersIcon, 
  Briefcase as BriefcaseIcon,
  Snowflake 
} from "lucide-react";

interface VehicleCard {
  name: string;
  capacity: string;
  luggage: string;
  rate: number;
  minFare: number;
  imageUrl: string;
}

const TariffSection = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [journeyType, setJourneyType] = useState("one_way");
  const [distance, setDistance] = useState<number | null>(null);
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);
  const [baseFare, setBaseFare] = useState<number | null>(null);
  const [tax, setTax] = useState<number | null>(null);

  const vehicles: VehicleCard[] = [
    {
      name: "Sedan",
      capacity: "4 Passengers",
      luggage: "2 Luggage",
      rate: 12,
      minFare: 300,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/741/741407.png"
    },
    {
      name: "SUV",
      capacity: "6 Passengers",
      luggage: "4 Luggage",
      rate: 16,
      minFare: 500,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/741/741415.png"
    },
    {
      name: "Tempo Traveller",
      capacity: "12 Passengers",
      luggage: "10 Luggage",
      rate: 22,
      minFare: 1200,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/3774/3774278.png"
    },
    {
      name: "Mini Bus",
      capacity: "20 Passengers",
      luggage: "15 Luggage",
      rate: 35,
      minFare: 2000,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2441/2441189.png"
    }
  ];

  const calculateFare = () => {
    if (!pickup || !drop || !vehicleType) {
      alert("Please fill in all required fields");
      return;
    }

    // For demo purposes, let's assume a fixed distance between locations
    let calculatedDistance = Math.floor(Math.random() * 50) + 10; // Random distance between 10-60 km
    let rate = 0;
    
    // Find the selected vehicle rate
    const selectedVehicle = vehicles.find(v => v.name.toLowerCase() === vehicleType.toLowerCase());
    if (selectedVehicle) {
      rate = selectedVehicle.rate;
    }
    
    const multiplier = journeyType === "round_trip" ? 2 : 1;
    const calculatedBaseFare = calculatedDistance * rate * multiplier;
    const calculatedTax = calculatedBaseFare * 0.05; // 5% GST
    const calculatedTotal = calculatedBaseFare + calculatedTax;
    
    setDistance(calculatedDistance * multiplier);
    setBaseFare(calculatedBaseFare);
    setTax(calculatedTax);
    setEstimatedFare(calculatedTotal);
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="tariff" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tariff Calculator</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get instant fare estimates for your journey with our transparent pricing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Calculate Your Fare</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pickup-location">Pickup Location</Label>
                <Input 
                  id="pickup-location" 
                  placeholder="Enter pickup location" 
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="drop-location">Drop Location</Label>
                <Input 
                  id="drop-location" 
                  placeholder="Enter drop location" 
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="vehicle-type">Vehicle Type</Label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger id="vehicle-type">
                    <SelectValue placeholder="Select Vehicle Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan (4 Seater) - ₹12/km</SelectItem>
                    <SelectItem value="suv">SUV (6 Seater) - ₹16/km</SelectItem>
                    <SelectItem value="tempo">Tempo Traveller (12 Seater) - ₹22/km</SelectItem>
                    <SelectItem value="bus">Mini Bus (20 Seater) - ₹35/km</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="journey-type">Journey Type</Label>
                <Select value={journeyType} onValueChange={setJourneyType}>
                  <SelectTrigger id="journey-type">
                    <SelectValue placeholder="Select Journey Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one_way">One Way</SelectItem>
                    <SelectItem value="round_trip">Round Trip</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                className="w-full bg-taxi-primary text-taxi-dark hover:bg-taxi-primary/90 font-medium"
                onClick={calculateFare}
              >
                Calculate Fare
              </Button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Estimated Fare</h3>
            
            {estimatedFare ? (
              <>
                <div className="text-3xl font-bold text-taxi-primary mb-6">
                  ₹ {estimatedFare.toFixed(2)}
                </div>
                
                <div className="space-y-2 mb-8 flex-grow">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Base Fare:</span>
                    <span>₹ {baseFare?.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Distance:</span>
                    <span>{distance} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">GST (5%):</span>
                    <span>₹ {tax?.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="bg-taxi-primary text-taxi-dark hover:bg-taxi-primary/90 font-medium"
                  onClick={scrollToBooking}
                >
                  Book Now
                </Button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                  <AlertCircle className="h-12 w-12" />
                </div>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Enter your journey details and click Calculate Fare to see the estimated price
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-6 text-center">Our Fleet</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gray-100 dark:bg-slate-700 p-4 flex items-center justify-center">
                  <img 
                    src={vehicle.imageUrl} 
                    alt={vehicle.name} 
                    className="h-28 w-auto object-contain"
                  />
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="text-xl mb-2">{vehicle.name}</CardTitle>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <UsersIcon className="h-4 w-4 mr-2 text-taxi-primary" />
                      <span className="text-sm">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-4 w-4 mr-2 text-taxi-primary" />
                      <span className="text-sm">{vehicle.luggage}</span>
                    </div>
                    <div className="text-taxi-primary font-semibold">₹{vehicle.rate}/km</div>
                    <div className="text-sm text-gray-500">Min Fare: ₹{vehicle.minFare}</div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-taxi-primary text-taxi-primary hover:bg-taxi-primary hover:text-white"
                    onClick={scrollToBooking}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Important Notes:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>All prices include fuel and driver charges.</li>
            <li>Toll charges, parking fees, and state entry taxes are extra.</li>
            <li>Night charges (10 PM to 6 AM) may apply as per government regulations.</li>
            <li>Waiting charges will be applicable after the first 30 minutes.</li>
            <li>Special discounts available for regular customers and long journeys.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TariffSection;
