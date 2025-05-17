
import { BookingForm } from "./BookingForm";

const BookingSection = () => {
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
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
