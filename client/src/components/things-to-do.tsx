import { MapPin, Users, Bike, Fish, Utensils, Music, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ThingsToDo() {
  return (
    <section id="things-to-do" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-wedding-slate mb-4">Things To Do in Sandpoint</h2>
          <div className="w-24 h-px bg-[var(--wedding-blue)] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Make the most of your visit to beautiful North Idaho! Here are some of our favorite local attractions and activities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white shadow-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Lake Pend Oreille scenic view" 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-medium text-wedding-slate mb-2">Lake Pend Oreille</h3>
              <p className="text-slate-600 mb-4">Idaho's largest lake offers swimming, boating, fishing, and stunning mountain views. Perfect for a relaxing day by the water.</p>
              <div className="flex items-center text-sm text-[var(--wedding-blue)]">
                <MapPin className="h-4 w-4 mr-2" />
                <span>5 minutes from downtown</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Downtown Sandpoint main street" 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-medium text-wedding-slate mb-2">Downtown Sandpoint</h3>
              <p className="text-slate-600 mb-4">Explore charming local shops, art galleries, cafes, and restaurants along historic First Avenue. Don't miss the weekend farmers market!</p>
              <div className="flex items-center text-sm text-[var(--wedding-blue)]">
                <Users className="h-4 w-4 mr-2" />
                <span>Walkable area</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Schweitzer Mountain resort chairlift" 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-medium text-wedding-slate mb-2">Schweitzer Mountain</h3>
              <p className="text-slate-600 mb-4">Take the scenic chairlift ride for breathtaking panoramic views. Summer activities include hiking, mountain biking, and zip-lining.</p>
              <div className="flex items-center text-sm text-[var(--wedding-blue)]">
                <MapPin className="h-4 w-4 mr-2" />
                <span>20 minutes from town</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-wedding-slate mb-6">Outdoor Activities</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <Users className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="font-medium">Hiking Trails</span>
                    <p className="text-sm">Mineral Point Trail, Scotchman Peak, and Gold Hill</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Fish className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="font-medium">Water Sports</span>
                    <p className="text-sm">Kayaking, paddleboarding, and sailing on Lake Pend Oreille</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Bike className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="font-medium">Cycling</span>
                    <p className="text-sm">Great Northern Trail and mountain biking at Schweitzer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Fish className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="font-medium">Fishing</span>
                    <p className="text-sm">World-class fishing for trout, bass, and northern pike</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-wedding-slate mb-6">Dining & Entertainment</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <Utensils className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="font-medium">Local Restaurants</span>
                    <p className="text-sm">Spuds Waterfront Grill, Trinity at City Beach, Jalapeños</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Utensils className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="font-medium">Breweries</span>
                    <p className="text-sm">Sandpoint Brewing, Laughing Dog Brewing, and MickDuff's</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Music className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="font-medium">Live Music</span>
                    <p className="text-sm">The Panida Theater and various downtown venues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShoppingBag className="text-[var(--wedding-blue)] mt-1 mr-3 h-5 w-5" />
                  <div>
                    <span className="font-medium">Shopping</span>
                    <p className="text-sm">Unique local boutiques, art galleries, and outdoor gear shops</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
