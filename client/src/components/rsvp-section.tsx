import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RsvpSection() {
  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-wedding-slate mb-8">RSVP</h2>
        <div className="w-24 h-px bg-[var(--wedding-blue)] mx-auto mb-8"></div>
        
        <Card className="bg-slate-50">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg text-slate-600 mb-8">
              We can't wait to celebrate with you! Please let us know if you'll be joining us by 
              <strong className="text-wedding-slate"> May 1st, 2024</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Mail className="text-[var(--wedding-blue)] h-8 w-8 mr-3" />
                    <h3 className="text-xl font-medium text-wedding-slate">Email</h3>
                  </div>
                  <p className="text-slate-600 mb-4">Send us your RSVP via email</p>
                  <Button 
                    className="bg-[var(--wedding-blue)] hover:bg-blue-600 text-white"
                    onClick={() => window.location.href = 'mailto:kateandcharley2024@gmail.com'}
                  >
                    kateandcharley2024@gmail.com
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Phone className="text-[var(--wedding-blue)] h-8 w-8 mr-3" />
                    <h3 className="text-xl font-medium text-wedding-slate">Phone</h3>
                  </div>
                  <p className="text-slate-600 mb-4">Call or text us directly</p>
                  <Button 
                    className="bg-[var(--wedding-blue)] hover:bg-blue-600 text-white"
                    onClick={() => window.location.href = 'tel:+1234567890'}
                  >
                    (123) 456-7890
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-[var(--wedding-blue)]/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-wedding-slate mb-3">Please Include in Your RSVP:</h3>
                <ul className="text-left text-slate-600 space-y-2 max-w-md mx-auto">
                  <li>• Names of all attending guests</li>
                  <li>• Any dietary restrictions or allergies</li>
                  <li>• Song requests for the reception</li>
                  <li>• Your mailing address for thank you cards</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
