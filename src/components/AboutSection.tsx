
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pondy DropTaxi</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your premium travel partner in Pondicherry
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Pondy DropTaxi Fleet" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-taxi-primary text-taxi-dark p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold text-lg">24/7 Service</p>
              <p>Always available for you</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Who We Are</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pondy DropTaxi is Pondicherry's premier taxi service, dedicated to providing 
                exceptional transportation experiences. We take pride in our meticulously maintained 
                vehicles and professionally trained drivers who prioritize your comfort and safety above all.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3">Our Promise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We promise punctuality, transparency, comfort, and personalized service for every journey. 
                Whether you're a tourist exploring the beautiful streets of Pondicherry or a local needing 
                reliable transportation, we're here to exceed your expectations.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3">Why Choose Pondy DropTaxi?</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-taxi-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Experienced, courteous drivers with excellent local knowledge</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-taxi-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Immaculately maintained, air-conditioned vehicles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-taxi-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>24/7 availability - we're always there when you need us</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-taxi-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transparent pricing with no hidden charges</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-taxi-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Flexible booking options - book minutes or months in advance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-taxi-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Special packages for regular travelers and tourists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
