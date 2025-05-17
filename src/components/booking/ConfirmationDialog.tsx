
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";

interface ConfirmationDialogProps {
  showConfirmation: boolean;
  setShowConfirmation: (value: boolean) => void;
  bookingId: string;
  name: string;
  date: string;
  time: string;
  pickup: string;
  drop: string;
  vehicle: string;
}

export const ConfirmationDialog = ({
  showConfirmation,
  setShowConfirmation,
  bookingId,
  name,
  date,
  time,
  pickup,
  drop,
  vehicle,
}: ConfirmationDialogProps) => {
  const closeConfirmation = () => {
    setShowConfirmation(false);
    toast.success("Booking confirmed! We'll contact you shortly.", {
      description: `Booking ID: ${bookingId}`,
      duration: 5000,
    });
  };

  return (
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
  );
};
