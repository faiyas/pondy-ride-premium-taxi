
import { Car, PlaneDeparture, Route, Briefcase, Map, Users } from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: <Car className="h-10 w-10" />,
      title: "Local Taxi Service",
      description: "Explore Pondicherry's beautiful streets and attractions with our punctual local taxi service."
    },
    {
      icon: <PlaneDeparture className="h-10 w-10" />,
      title: "Airport Transfer",
      description: "Stress-free premium transfers to and from Chennai Airport with fixed rates and on-time service."
    },
    {
      icon: <Route className="h-10 w-10" />,
      title: "Outstation Trips",
      description: "Comfortable and safe journeys to Chennai, Mahabalipuram, Thanjavur and other destinations."
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Car Rental",
      description: "Flexible car rentals with experienced drivers for your daily travel needs."
    },
    {
      icon: <Map className="h-10 w-10" />,
      title: "Pondicherry Tours",
      description: "Discover the French Quarter, Auroville, and local attractions with our curated tours."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Group Travel",
      description: "Specialized vehicles for family trips, corporate outings, and group excursions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the finest transportation services in Pondicherry with our exceptional fleet and professional drivers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-5 text-taxi-primary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
