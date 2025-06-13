export default function Accommodations() {
  const hotels = [
    {
      name: "The Historic Sandpoint Lodge",
      description: "Historic downtown hotel with mountain views and modern amenities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      location: "Downtown Sandpoint",
      price: "$120-180/night",
      special: "Wedding party discount available",
      note: "Book by July 1st • Mention \"Kate & Charley Wedding\""
    },
    {
      name: "Lakeside Inn & Suites",
      description: "Modern lakefront hotel with pool and complimentary breakfast.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      location: "Lake Pend Oreille waterfront",
      price: "$90-140/night",
      special: "Pool & fitness center",
      note: "Group rate: 15% off • Code: KateCharley2024"
    },
    {
      name: "Mountain View Cabins",
      description: "Cozy cabins perfect for families, with kitchenettes and mountain views.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      location: "5 miles from downtown",
      price: "$150-220/night",
      special: "Full kitchens available",
      note: "Perfect for longer stays • Pet-friendly options"
    }
  ];

  return (
    <section id="stay" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Where to Stay
          </h2>
          <p className="text-lg text-gray-600">
            We've arranged special rates at these local accommodations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={hotel.image} 
                alt={hotel.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-2">
                  {hotel.name}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {hotel.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-dollar-sign mr-2"></i>
                    <span>{hotel.price}</span>
                  </div>
                  <div className="flex items-center text-accent-blue">
                    <i className={`fas ${index === 0 ? 'fa-star' : index === 1 ? 'fa-swimming-pool' : 'fa-home'} mr-2`}></i>
                    <span>{hotel.special}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-500">{hotel.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Accommodation Info */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
            Additional Options
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-medium text-gray-800 mb-3">Vacation Rentals</h5>
              <p className="text-gray-600 text-sm mb-3">
                For larger groups, consider vacation rentals through Airbnb or VRBO. 
                Many beautiful lakefront homes available.
              </p>
              <div className="flex items-center text-accent-blue text-sm">
                <i className="fas fa-external-link-alt mr-2"></i>
                <span>Search "Sandpoint Idaho vacation rentals"</span>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-800 mb-3">Camping Options</h5>
              <p className="text-gray-600 text-sm mb-3">
                For the adventurous guests, several beautiful campgrounds are nearby 
                including Farragut State Park.
              </p>
              <div className="flex items-center text-accent-blue text-sm">
                <i className="fas fa-campground mr-2"></i>
                <span>Reserve early for summer dates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
