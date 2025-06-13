export default function WeddingDetails() {
  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Wedding Details
          </h2>
          <p className="text-lg text-gray-600">Join us for our special day</p>
        </div>
        
        {/* Ceremony & Reception Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ceremony Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-accent-blue">
            <div className="flex items-center mb-6">
              <i className="fas fa-heart text-accent-blue text-2xl mr-4"></i>
              <h3 className="font-playfair text-2xl font-semibold text-primary">
                Ceremony
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-clock text-gray-400 mt-1 mr-3"></i>
                <div>
                  <p className="font-medium text-gray-800">4:00 PM</p>
                  <p className="text-gray-600">August 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-gray-400 mt-1 mr-3"></i>
                <div>
                  <p className="font-medium text-gray-800">Schweitzer Mountain Resort</p>
                  <p className="text-gray-600">
                    10000 Schweitzer Mountain Rd<br />
                    Sandpoint, ID 83864
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-leaf text-gray-400 mt-1 mr-3"></i>
                <div>
                  <p className="font-medium text-gray-800">Outdoor Ceremony</p>
                  <p className="text-gray-600">Mountain summit with panoramic views</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reception Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-accent-blue">
            <div className="flex items-center mb-6">
              <i className="fas fa-glass-cheers text-accent-blue text-2xl mr-4"></i>
              <h3 className="font-playfair text-2xl font-semibold text-primary">
                Reception
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-clock text-gray-400 mt-1 mr-3"></i>
                <div>
                  <p className="font-medium text-gray-800">6:00 PM - 11:00 PM</p>
                  <p className="text-gray-600">Dinner, Dancing & Celebration</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-gray-400 mt-1 mr-3"></i>
                <div>
                  <p className="font-medium text-gray-800">The Floating Restaurant</p>
                  <p className="text-gray-600">
                    115 Lake St<br />
                    Sandpoint, ID 83864
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-utensils text-gray-400 mt-1 mr-3"></i>
                <div>
                  <p className="font-medium text-gray-800">Dinner & Open Bar</p>
                  <p className="text-gray-600">Lakeside dining with live music</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-light-blue rounded-xl p-8">
          <h4 className="font-playfair text-2xl font-semibold text-primary mb-8 text-center">
            Important Notes
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/10 rounded-full mx-auto mb-4">
                <i className="fas fa-tshirt text-accent-blue text-xl"></i>
              </div>
              <h5 className="font-medium text-gray-800 mb-3 text-center">Dress Code</h5>
              <p className="text-sm text-gray-600 text-center">
                Semi-formal outdoor attire. Ladies, consider comfortable shoes for mountain terrain.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/10 rounded-full mx-auto mb-4">
                <i className="fas fa-cloud-sun text-accent-blue text-xl"></i>
              </div>
              <h5 className="font-medium text-gray-800 mb-3 text-center">Weather</h5>
              <p className="text-sm text-gray-600 text-center">
                August temperatures: 70-80°F during day, 50-60°F evening. Bring a light jacket.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/10 rounded-full mx-auto mb-4">
                <i className="fas fa-bus text-accent-blue text-xl"></i>
              </div>
              <h5 className="font-medium text-gray-800 mb-3 text-center">Transportation</h5>
              <p className="text-sm text-gray-600 text-center">
                Shuttle service provided from downtown hotels to ceremony venue at 3:00 PM.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-blue/10 rounded-full mx-auto mb-4">
                <i className="fas fa-reply text-accent-blue text-xl"></i>
              </div>
              <h5 className="font-medium text-gray-800 mb-3 text-center">RSVP</h5>
              <p className="text-sm text-gray-600 text-center">
                Please respond by July 1, 2024. We can't wait to celebrate with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
