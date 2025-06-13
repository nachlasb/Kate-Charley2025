import { MapPin, Car, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-wedding-slate mb-4">Location & Directions</h2>
          <div className="w-24 h-px bg-[var(--wedding-blue)] mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Mountain resort wedding venue" 
              className="rounded-2xl shadow-lg w-full h-auto mb-8"
            />
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-wedding-slate mb-6">Schweitzer Mountain Resort</h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start">
                    <MapPin className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p>10000 Schweitzer Mountain Rd<br />Sandpoint, ID 83864</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Car className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                    <div>
                      <p className="font-medium">Driving Directions</p>
                      <p>Take Highway 95 to Schweitzer Mountain Road. Follow signs to the resort. Free parking available.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                    <div>
                      <p className="font-medium">Travel Time from Sandpoint</p>
                      <p>Approximately 20 minutes by car</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-wedding-slate mb-4">Interactive Map</h3>
                <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <MapPin className="h-12 w-12 mb-4 mx-auto" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <Button 
                      className="mt-4 bg-[var(--wedding-blue)] hover:bg-blue-600"
                      onClick={() => window.open('https://maps.google.com/maps?q=Schweitzer+Mountain+Resort', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-wedding-slate mb-4">Accommodation</h3>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <p className="font-medium text-wedding-slate">Recommended Hotels</p>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li>• Best Western Edgewater Resort - Sandpoint</li>
                      <li>• La Quinta Inn & Suites Sandpoint</li>
                      <li>• Quality Inn & Suites Sandpoint</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-wedding-slate">Booking Information</p>
                    <p className="text-sm mt-2">We recommend booking early as summer is peak season in Sandpoint. Most hotels are within 20 minutes of the venue.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
