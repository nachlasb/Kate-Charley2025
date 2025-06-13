import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WeddingDetails from "@/components/wedding-details";
import LocationMap from "@/components/location-map";
import Accommodations from "@/components/accommodations";
import Activities from "@/components/activities";
import Registry from "@/components/registry";
import Weather from "@/components/weather";
import PhotoGallery from "@/components/photo-gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Handle smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click listeners to all anchor links with hashes
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WeddingDetails />
      
      {/* Full-width wedding image */}
      <section className="w-full">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1920&h=800&q=80"
            alt="Couple getting married"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>
      
      <LocationMap />
      <Accommodations />
      <Activities />
      <Registry />
      <Weather />
      <PhotoGallery />
      <Contact />
      <Footer />
    </div>
  );
}
