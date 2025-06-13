import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WeddingDetails from "@/components/wedding-details";
import LocationSection from "@/components/location-section";
import RegistrySection from "@/components/registry-section";
import ThingsToDo from "@/components/things-to-do";
import RsvpSection from "@/components/rsvp-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WeddingDetails />
      <LocationSection />
      <RegistrySection />
      <ThingsToDo />
      <RsvpSection />
      <Footer />
    </div>
  );
}
