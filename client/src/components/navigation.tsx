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
              <g transform="translate(8, 12) scale(0.75)">
                <path d="M15 25 Q15 15 25 10 Q35 8 45 12 Q50 15 50 22 Q50 28 48 32 Q45 38 40 40 Q30 42 20 40 Q15 35 15 25" fill="#1a1a1a"/>
                <path d="M12 20 Q8 18 8 25 Q8 32 12 35 Q15 32 15 25 Q15 20 12 20" fill="#1a1a1a"/>
                <path d="M40 32 Q48 35 50 40 Q48 45 42 45 Q38 42 40 32" fill="#1a1a1a"/>
                <circle cx="32" cy="22" r="2.5" fill="#fff"/>
                <circle cx="32.5" cy="21.5" r="1.5" fill="#000"/>
                <circle cx="33" cy="21" r="0.5" fill="#fff"/>
                <ellipse cx="45" cy="38" rx="2" ry="1.5" fill="#000"/>
                <path d="M42 42 Q40 44 38 43" stroke="#000" strokeWidth="1" fill="none" strokeLinecap="round"/>
              </g>
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
