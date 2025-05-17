
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TariffSection from "@/components/TariffSection";
import BookingSection from "@/components/BookingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <TariffSection />
          <BookingSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default Index;
