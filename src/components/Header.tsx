
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto py-4 px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              Pondy <span className="text-taxi-primary">DropTaxi</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><button onClick={() => scrollToSection('home')} className="font-medium hover:text-taxi-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="font-medium hover:text-taxi-primary transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('tariff')} className="font-medium hover:text-taxi-primary transition-colors">Tariff</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="font-medium hover:text-taxi-primary transition-colors">Book Now</button></li>
              <li><button onClick={() => scrollToSection('about')} className="font-medium hover:text-taxi-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="font-medium hover:text-taxi-primary transition-colors">Contact</button></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md animate-fade-in">
            <ul className="flex flex-col py-4 px-4">
              <li className="py-2"><button onClick={() => scrollToSection('home')} className="font-medium w-full text-left hover:text-taxi-primary transition-colors">Home</button></li>
              <li className="py-2"><button onClick={() => scrollToSection('services')} className="font-medium w-full text-left hover:text-taxi-primary transition-colors">Services</button></li>
              <li className="py-2"><button onClick={() => scrollToSection('tariff')} className="font-medium w-full text-left hover:text-taxi-primary transition-colors">Tariff</button></li>
              <li className="py-2"><button onClick={() => scrollToSection('booking')} className="font-medium w-full text-left hover:text-taxi-primary transition-colors">Book Now</button></li>
              <li className="py-2"><button onClick={() => scrollToSection('about')} className="font-medium w-full text-left hover:text-taxi-primary transition-colors">About Us</button></li>
              <li className="py-2"><button onClick={() => scrollToSection('contact')} className="font-medium w-full text-left hover:text-taxi-primary transition-colors">Contact</button></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
