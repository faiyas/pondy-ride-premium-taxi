
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pondy DropTaxi</h3>
            <p className="text-gray-300 mb-6">
              Your premium transportation partner in Pondicherry. We provide
              reliable, comfortable, and affordable taxi services for all your
              travel needs, 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-taxi-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-taxi-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-taxi-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-taxi-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-taxi-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tariff')}
                  className="text-gray-300 hover:text-taxi-primary transition-colors"
                >
                  Tariff
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-300 hover:text-taxi-primary transition-colors"
                >
                  Book Now
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-taxi-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-taxi-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-taxi-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  24/52, Haji Hussain Street, Kottakuppam, Pondicherry
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-taxi-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+91 90252 32453</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-taxi-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">mohamedfaiyas11@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pondy DropTaxi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
