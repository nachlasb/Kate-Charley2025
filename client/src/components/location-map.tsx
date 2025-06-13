export default function LocationMap() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Location & Map
          </h2>
          <p className="text-lg text-gray-600">Find us in beautiful Sandpoint, Idaho</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <i className="fas fa-map text-4xl text-gray-400 mb-4"></i>
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-gray-500 text-sm mt-2">
                  Ceremony and Reception Locations
                </p>
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173035.52159814066!2d-116.65574742949224!3d48.24946357119428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361c29c72e36f7b%3A0x40bfb5811b8b8c3e!2sSandpoint%2C%20ID!5e0!3m2!1sen!2sus!4v1709845600000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sandpoint, Idaho Location"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            {/* Venue Information Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Ceremony Location */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent-blue">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-heart text-accent-blue"></i>
                  </div>
                  <h4 className="font-playfair text-xl font-semibold text-primary">
                    Ceremony Venue
                  </h4>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-gray-800">Schweitzer Mountain Resort</p>
                  <p className="text-gray-600 text-sm">10000 Schweitzer Mountain Rd, Sandpoint, ID 83864</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-car text-accent-blue mr-2"></i>
                    <span>15 minutes from downtown Sandpoint</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-mountain text-accent-blue mr-2"></i>
                    <span>Elevation: 6,400 feet</span>
                  </div>
                </div>
              </div>

              {/* Reception Location */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent-blue">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent-blue/10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-glass-cheers text-accent-blue"></i>
                  </div>
                  <h4 className="font-playfair text-xl font-semibold text-primary">
                    Reception Venue
                  </h4>
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-gray-800">The Floating Restaurant</p>
                  <p className="text-gray-600 text-sm">115 Lake St, Sandpoint, ID 83864</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-water text-accent-blue mr-2"></i>
                    <span>Directly on Lake Pend Oreille</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-walking text-accent-blue mr-2"></i>
                    <span>Downtown Sandpoint waterfront</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Getting Around Section */}
            <div className="bg-gradient-to-r from-accent-blue/5 to-light-blue rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-route text-accent-blue text-xl"></i>
                </div>
                <h4 className="font-playfair text-2xl font-semibold text-primary">Getting Around</h4>
              </div>
              
              {/* Tandem Bicycle Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://thumbs.dreamstime.com/b/couple-tandem-bicycle-beautiful-young-having-fun-riding-park-104166098.jpg"
                  alt="Couple riding tandem bicycle"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-shuttle-van text-accent-blue text-lg mr-3"></i>
                    <h5 className="font-medium text-gray-800">Shuttle Service</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Complimentary shuttles from downtown hotels to ceremony venue at 3:00 PM
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-parking text-accent-blue text-lg mr-3"></i>
                    <h5 className="font-medium text-gray-800">Parking Available</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Free parking available at both ceremony and reception venues
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-clock text-accent-blue text-lg mr-3"></i>
                    <h5 className="font-medium text-gray-800">Travel Time</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Scenic 20-minute drive between ceremony and reception locations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
