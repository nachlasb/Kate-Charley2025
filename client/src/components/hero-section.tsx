import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToDetails = () => {
    const element = document.querySelector('#details');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-overlay" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="hero-text text-6xl md:text-7xl lg:text-8xl font-light mb-4 tracking-wide">
          Kate <span className="text-[var(--wedding-blue-light)]">&</span> Charley
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
          are getting married in Sandpoint, Idaho
        </p>
        <div className="space-y-2 mb-8">
          <p className="text-lg md:text-xl font-medium">June 15, 2024</p>
          <p className="text-base md:text-lg opacity-80">Schweitzer Mountain Resort</p>
        </div>
        <Button 
          onClick={scrollToDetails}
          className="bg-[var(--wedding-blue)] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          View Details
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8 opacity-70" />
      </div>
    </section>
  );
}
