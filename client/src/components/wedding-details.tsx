import { Calendar, Utensils, Shirt, CloudSun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WeddingDetails() {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-wedding-slate mb-4">Wedding Details</h2>
          <div className="w-24 h-px bg-[var(--wedding-blue)] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="text-[var(--wedding-blue)] h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-medium text-wedding-slate">Ceremony</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="text-lg"><strong>Date:</strong> Saturday, June 15, 2024</p>
                  <p className="text-lg"><strong>Time:</strong> 4:00 PM</p>
                  <p className="text-lg"><strong>Venue:</strong> Schweitzer Mountain Resort</p>
                  <p className="text-base">10000 Schweitzer Mountain Rd, Sandpoint, ID 83864</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Utensils className="text-[var(--wedding-blue)] h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-medium text-wedding-slate">Reception</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="text-lg"><strong>Time:</strong> 6:00 PM - 11:00 PM</p>
                  <p className="text-lg"><strong>Location:</strong> Same venue</p>
                  <p className="text-base">Dinner, dancing, and celebration under the stars</p>
                  <p className="text-sm text-[var(--wedding-blue-light)] italic mt-3">
                    *Guiness, our black lab, will be making a special appearance during the ceremony! 🐾
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shirt className="text-[var(--wedding-blue)] h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-medium text-wedding-slate">Dress Code</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="text-lg">Cocktail Attire</p>
                  <p className="text-base">We recommend layers for mountain weather</p>
                  <p className="text-base">Comfortable shoes for outdoor terrain</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CloudSun className="text-[var(--wedding-blue)] h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-medium text-wedding-slate">Weather</h3>
                </div>
                <div className="space-y-2 text-slate-600">
                  <p className="text-lg">Expected: 75°F / 55°F</p>
                  <p className="text-base">Partly cloudy with mountain views</p>
                  <p className="text-base">Light jacket recommended for evening</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
