export default function Activities() {
  const quickActivities = [
    {
      icon: "fas fa-hiking",
      title: "Hiking Trails",
      description: "Explore scenic mountain and lakeside trails with stunning views."
    },
    {
      icon: "fas fa-ship",
      title: "Lake Activities", 
      description: "Boating, fishing, and swimming on pristine Lake Pend Oreille."
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Downtown Shopping",
      description: "Browse unique boutiques, galleries, and local artisan shops."
    },
    {
      icon: "fas fa-utensils",
      title: "Local Dining",
      description: "Enjoy farm-to-table restaurants and local brewery experiences."
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Things to Do
          </h2>
          <p className="text-lg text-gray-600">
            Make the most of your visit to beautiful Sandpoint
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActivities.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-accent-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${activity.icon} text-accent-blue text-2xl`}></i>
              </div>
              <h4 className="font-semibold text-primary mb-2">{activity.title}</h4>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Activities */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Outdoor Activities */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
              alt="Outdoor adventure activities" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
                Outdoor Adventures
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-biking text-accent-blue mr-3"></i>
                  <span className="text-gray-700">Mountain biking trails at Schweitzer</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-tint text-accent-blue mr-3"></i>
                  <span className="text-gray-700">Kayaking and paddleboarding rentals</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-fish text-accent-blue mr-3"></i>
                  <span className="text-gray-700">World-class fishing on Lake Pend Oreille</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-camera text-accent-blue mr-3"></i>
                  <span className="text-gray-700">Scenic chairlift rides (summer operation)</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 p-3 bg-light-blue rounded-lg">
                <i className="fas fa-paw mr-2"></i>
                Many trails are dog-friendly - feel free to bring your furry friends! 
                Our pup Guiness loves the lake trail especially.
              </p>
            </div>
          </div>

          {/* Cultural Activities */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
              alt="Historic downtown area" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
                Culture & Relaxation
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-palette text-accent-blue mr-3"></i>
                  <span className="text-gray-700">Art galleries and local artist studios</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-music text-accent-blue mr-3"></i>
                  <span className="text-gray-700">Live music venues and summer concerts</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-glass-cheers text-accent-blue mr-3"></i>
                  <span className="text-gray-700">Local breweries and wine tasting</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-spa text-accent-blue mr-3"></i>
                  <span className="text-gray-700">Spa services and wellness centers</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Weekend Highlights</h5>
                <p className="text-gray-600 text-sm">
                  Saturday farmers market (8am-1pm) • Art Walk first Friday • Live music at local venues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
