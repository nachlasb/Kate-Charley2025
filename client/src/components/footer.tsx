export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40" height="40" className="mr-3">
              <g transform="translate(4, 8) scale(0.9)">
                <path d="M8 48 Q8 40 12 35 Q15 30 18 28 Q20 25 22 24 Q24 20 28 18 Q32 16 36 17 Q40 18 42 20 Q44 22 45 25 Q46 28 47 32 Q48 36 50 40 Q52 44 54 48 Q52 50 48 52 Q44 53 40 54 Q36 55 32 55 Q28 55 24 54 Q20 53 16 52 Q12 50 8 48" fill="#ffffff"/>
                <path d="M18 28 Q15 25 15 20 Q15 15 18 12 Q22 8 28 8 Q34 8 38 12 Q42 15 42 20 Q42 25 40 28 Q38 30 35 32 Q32 33 28 33 Q24 33 21 32 Q18 30 18 28" fill="#ffffff"/>
                <path d="M12 18 Q8 15 8 20 Q8 25 10 28 Q12 30 15 28 Q17 25 17 20 Q17 15 15 12 Q13 10 12 12 Q11 15 12 18" fill="#ffffff"/>
                <path d="M35 28 Q40 30 42 34 Q43 38 40 40 Q37 41 35 38 Q34 35 35 32 Q35 30 35 28" fill="#ffffff"/>
                <circle cx="28" cy="20" r="1.5" fill="#1a1a1a"/>
                <rect x="20" y="50" width="3" height="8" fill="#ffffff"/>
                <rect x="26" y="50" width="3" height="8" fill="#ffffff"/>
                <rect x="38" y="50" width="3" height="8" fill="#ffffff"/>
                <rect x="44" y="50" width="3" height="8" fill="#ffffff"/>
                <path d="M52 40 Q56 38 58 42 Q58 46 54 48 Q52 46 52 42 Q52 40 52 40" fill="#ffffff"/>
              </g>
            </svg>
            <h3 className="font-playfair text-3xl font-bold">Kate & Charley</h3>
          </div>
          <p className="text-gray-300">August 15, 2024 • Sandpoint, Idaho</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-3">Ceremony</h4>
            <p className="text-gray-300 text-sm">
              Schweitzer Mountain Resort<br />
              4:00 PM
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-3">Reception</h4>
            <p className="text-gray-300 text-sm">
              The Floating Restaurant<br />
              6:00 PM
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-3">RSVP By</h4>
            <p className="text-gray-300 text-sm">July 1, 2024</p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            We can't wait to celebrate with our family and friends in beautiful Idaho!
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fas fa-heart"></i>
            </a>
            <a 
              href="mailto:kate@example.com" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="tel:+1234567890" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            © 2024 Kate & Charley Wedding • Made with ❤️ for our special day
          </p>
        </div>
      </div>
    </footer>
  );
}
