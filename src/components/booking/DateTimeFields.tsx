
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DateTimeFieldsProps {
  date: string;
  setDate: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
}

export const DateTimeFields = ({
  date,
  setDate,
  time,
  setTime,
}: DateTimeFieldsProps) => {
  return (
    <>
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
    </>
  );
};
