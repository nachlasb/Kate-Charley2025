export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="font-playfair text-3xl font-bold mb-2">Kate & Charley</h3>
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
