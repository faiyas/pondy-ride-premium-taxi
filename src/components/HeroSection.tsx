
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 z-10">
        <div className="max-w-xl mx-auto md:ml-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Premium Taxi Service in Pondicherry
          </h1>
          <p className="text-xl text-gray-300 mb-10 animate-fade-in-delay-1">
            Safe, reliable, and affordable transportation with Pondy DropTaxi. 
            Your journey, our priority!
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('booking')}
              className="bg-taxi-primary text-taxi-dark hover:bg-taxi-primary/90 font-semibold px-8 py-6"
            >
              Book a Taxi
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('tariff')}
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6"
            >
              Check Tariff
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative taxi image */}
      <div className="absolute -right-32 bottom-0 w-2/3 h-2/3 opacity-20 md:opacity-30 pointer-events-none">
        <svg viewBox="0 0 512 512" fill="currentColor" className="w-full h-full">
          <path d="M347.445,125.404l-6.667-80H171.222l-6.667,80H347.445z M152.889,245.404l11.56-56.678
          c1.869-9.142,9.999-15.726,19.33-15.726h144.443c9.331,0,17.461,6.583,19.329,15.726l11.56,56.678H152.889z M408.889,253.071
          H103.111c-5.891,0-10.667,4.776-10.667,10.667v32c0,5.891,4.776,10.667,10.667,10.667h13.778v74.667
          c0,5.891,4.776,10.667,10.667,10.667h42.667c5.891,0,10.667-4.776,10.667-10.667v-21.333h160v21.333
          c0,5.891,4.776,10.667,10.667,10.667h42.667c5.891,0,10.667-4.776,10.667-10.667v-74.667h13.778
          c5.891,0,10.667-4.776,10.667-10.667v-32C419.556,257.847,414.78,253.071,408.889,253.071z M154.667,328.404
          c-11.782,0-21.333-9.551-21.333-21.333c0-11.782,9.551-21.333,21.333-21.333s21.333,9.551,21.333,21.333
          C176,318.853,166.449,328.404,154.667,328.404z M357.333,328.404c-11.782,0-21.333-9.551-21.333-21.333
          c0-11.782,9.551-21.333,21.333-21.333s21.333,9.551,21.333,21.333C378.667,318.853,369.116,328.404,357.333,328.404z"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
