import React from "react";
import { Plane, Car, Route, Users, Briefcase, MapPin } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a range of taxi services to meet all your transportation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-taxi-primary/20 text-taxi-primary flex items-center justify-center mb-4">
              <Plane className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-50">Airport Transfers</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reliable and comfortable airport transfer services to get you to your destination on time.
            </p>
          </div>
          
          {/* Service Card 2 */}
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-taxi-primary/20 text-taxi-primary flex items-center justify-center mb-4">
              <Car className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-50">Outstation Trips</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore nearby cities and attractions with our convenient outstation taxi services.
            </p>
          </div>
          
          {/* Service Card 3 */}
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-taxi-primary/20 text-taxi-primary flex items-center justify-center mb-4">
              <Route className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-50">Local City Rides</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quick and easy local rides within the city for your daily commute or errands.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-taxi-primary/20 text-taxi-primary flex items-center justify-center mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-50">Group Travel</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Spacious and comfortable vehicles for group travel, ensuring everyone travels together.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-taxi-primary/20 text-taxi-primary flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-50">Corporate Travel</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Dedicated corporate travel solutions for businesses, ensuring efficient and reliable transportation.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-taxi-primary/20 text-taxi-primary flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-50">Custom Packages</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailored taxi packages to suit your specific travel needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
