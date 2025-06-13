import { Target, Home, Mountain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RegistrySection() {
  return (
    <section id="registry" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-wedding-slate mb-4">Wedding Registry</h2>
          <div className="w-24 h-px bg-[var(--wedding-blue)] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you'd like to honor us with something special, 
            we've registered at these wonderful stores.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-50 text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-red-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-wedding-slate mb-2">Target</h3>
              <p className="text-slate-600 mb-4">Home essentials and everyday items</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                View Registry
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-50 text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-wedding-slate mb-2">Bed Bath & Beyond</h3>
              <p className="text-slate-600 mb-4">Kitchen and bathroom essentials</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                View Registry
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-50 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="text-orange-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-wedding-slate mb-2">REI Co-op</h3>
              <p className="text-slate-600 mb-4">Outdoor gear and adventure equipment</p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                View Registry
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <Card className="bg-slate-50 text-center">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium text-wedding-slate mb-4">Honeymoon Fund</h3>
              <p className="text-slate-600 mb-6">
                We're also saving for our dream honeymoon to New Zealand! 
                If you'd prefer to contribute to our adventure fund, we'd be incredibly grateful.
              </p>
              <Button className="bg-[var(--wedding-blue)] hover:bg-blue-600 text-white px-8 py-3 font-medium">
                Contribute to Honeymoon Fund
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
