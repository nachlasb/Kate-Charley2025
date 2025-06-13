import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'details', 'location', 'stay', 'activities', 'registry', 'weather', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#details', label: 'Details' },
    { href: '#location', label: 'Location' },
    { href: '#stay', label: 'Stay' },
    { href: '#activities', label: 'Things to Do' },
    { href: '#registry', label: 'Registry' },
    { href: '#weather', label: 'Weather' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32" className="flex-shrink-0">
              <ellipse cx="32" cy="30" rx="18" ry="16" fill="#1a1a1a"/>
              <ellipse cx="19" cy="24" rx="6" ry="12" fill="#0f0f0f" transform="rotate(-15 19 24)"/>
              <ellipse cx="45" cy="24" rx="6" ry="12" fill="#0f0f0f" transform="rotate(15 45 24)"/>
              <ellipse cx="32" cy="38" rx="8" ry="6" fill="#0f0f0f"/>
              <circle cx="26" cy="26" r="3" fill="#fff"/>
              <circle cx="38" cy="26" r="3" fill="#fff"/>
              <circle cx="26" cy="26" r="2" fill="#8B4513"/>
              <circle cx="38" cy="26" r="2" fill="#8B4513"/>
              <circle cx="26.5" cy="25.5" r="0.8" fill="#fff"/>
              <circle cx="38.5" cy="25.5" r="0.8" fill="#fff"/>
              <ellipse cx="32" cy="36" rx="2.5" ry="2" fill="#000"/>
              <path d="M32 38 Q28 40 26 39" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M32 38 Q36 40 38 39" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            <div className="font-playfair text-xl font-semibold text-primary">
              Kate & Charley
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-accent-blue'
                    : 'text-gray-600 hover:text-accent-blue'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-lg transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'text-accent-blue'
                        : 'text-gray-600 hover:text-accent-blue'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
