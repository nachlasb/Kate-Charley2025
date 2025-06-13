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
              <g transform="translate(4, 8) scale(0.9)">
                <path d="M8 48 Q8 40 12 35 Q15 30 18 28 Q20 25 22 24 Q24 20 28 18 Q32 16 36 17 Q40 18 42 20 Q44 22 45 25 Q46 28 47 32 Q48 36 50 40 Q52 44 54 48 Q52 50 48 52 Q44 53 40 54 Q36 55 32 55 Q28 55 24 54 Q20 53 16 52 Q12 50 8 48" fill="#1a1a1a"/>
                <path d="M18 28 Q15 25 15 20 Q15 15 18 12 Q22 8 28 8 Q34 8 38 12 Q42 15 42 20 Q42 25 40 28 Q38 30 35 32 Q32 33 28 33 Q24 33 21 32 Q18 30 18 28" fill="#1a1a1a"/>
                <path d="M12 18 Q8 15 8 20 Q8 25 10 28 Q12 30 15 28 Q17 25 17 20 Q17 15 15 12 Q13 10 12 12 Q11 15 12 18" fill="#1a1a1a"/>
                <path d="M35 28 Q40 30 42 34 Q43 38 40 40 Q37 41 35 38 Q34 35 35 32 Q35 30 35 28" fill="#1a1a1a"/>
                <circle cx="28" cy="20" r="1.5" fill="#ffffff"/>
                <rect x="20" y="50" width="3" height="8" fill="#1a1a1a"/>
                <rect x="26" y="50" width="3" height="8" fill="#1a1a1a"/>
                <rect x="38" y="50" width="3" height="8" fill="#1a1a1a"/>
                <rect x="44" y="50" width="3" height="8" fill="#1a1a1a"/>
                <path d="M52 40 Q56 38 58 42 Q58 46 54 48 Q52 46 52 42 Q52 40 52 40" fill="#1a1a1a"/>
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
