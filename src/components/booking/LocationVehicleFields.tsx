
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LocationVehicleFieldsProps {
  pickup: string;
  setPickup: (value: string) => void;
  drop: string;
  setDrop: (value: string) => void;
  vehicle: string;
  setVehicle: (value: string) => void;
  instructions: string;
  setInstructions: (value: string) => void;
}

export const LocationVehicleFields = ({
  pickup,
  setPickup,
  drop,
  setDrop,
  vehicle,
  setVehicle,
  instructions,
  setInstructions,
}: LocationVehicleFieldsProps) => {
  return (
    <>
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
    </>
  );
};
