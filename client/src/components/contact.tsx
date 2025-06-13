import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRSVPClick = () => {
    window.open('https://forms.gle/rsvp-kate-charley-wedding', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">Have questions? We'd love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h4 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Get in Touch
              </h4>
              
              <div className="space-y-6">
                {/* Kate's Contact */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-800 mb-3">Kate</h5>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-accent-blue mr-3"></i>
                      <span className="text-gray-700">kate.wedding2024@email.com</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-phone text-accent-blue mr-3"></i>
                      <span className="text-gray-700">(555) 123-4567</span>
                    </div>
                  </div>
                </div>

                {/* Charley's Contact */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-800 mb-3">Charley</h5>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-accent-blue mr-3"></i>
                      <span className="text-gray-700">charley.wedding2024@email.com</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-phone text-accent-blue mr-3"></i>
                      <span className="text-gray-700">(555) 765-4321</span>
                    </div>
                  </div>
                </div>

                {/* Wedding Coordinator */}
                <div className="bg-light-blue rounded-xl p-6">
                  <h5 className="font-semibold text-gray-800 mb-3">Wedding Coordinator</h5>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">Sarah Mitchell Events</p>
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-accent-blue mr-3"></i>
                      <span className="text-gray-700">sarah@mitchellevents.com</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-phone text-accent-blue mr-3"></i>
                      <span className="text-gray-700">(208) 555-0199</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RSVP Reminder */}
            <div className="bg-accent-blue/10 rounded-xl p-6 text-center">
              <h5 className="font-semibold text-primary mb-3">RSVP Reminder</h5>
              <p className="text-gray-700 text-sm mb-4">Please respond by July 1, 2024</p>
              <Button 
                className="bg-accent-blue hover:bg-blue-600 text-white"
                onClick={handleRSVPClick}
              >
                RSVP Now
              </Button>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="font-semibold text-primary mb-6">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  required
                  className="w-full"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent-blue hover:bg-blue-600 text-white"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
