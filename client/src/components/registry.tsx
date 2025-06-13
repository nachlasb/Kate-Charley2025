import { Button } from "@/components/ui/button";

export default function Registry() {
  const registries = [
    {
      name: "Target",
      description: "Home essentials, kitchen items, and everyday needs for our new life together.",
      icon: "fas fa-bullseye",
      color: "red",
      url: "https://www.target.com/gift-registry/gift/kate-charley-wedding"
    },
    {
      name: "Crate & Barrel", 
      description: "Beautiful dinnerware, furniture, and home decor for our mountain home.",
      icon: "fas fa-gem",
      color: "blue",
      url: "https://www.crateandbarrel.com/gift-registry/kate-charley"
    },
    {
      name: "REI Co-op",
      description: "Outdoor gear and adventure equipment for exploring our new Idaho home.",
      icon: "fas fa-mountain",
      color: "green", 
      url: "https://www.rei.com/gift-registry/kate-charley-wedding"
    }
  ];

  const handleRegistryClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="registry" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Wedding Registry
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift of all. For those who wish to honor us with a gift, 
            we've registered at the following stores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {registries.map((registry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  registry.color === 'red' ? 'bg-red-100' : 
                  registry.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <i className={`${registry.icon} text-2xl ${
                    registry.color === 'red' ? 'text-red-600' : 
                    registry.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                  }`}></i>
                </div>
                <h4 className="font-semibold text-primary text-lg">{registry.name}</h4>
              </div>
              <p className="text-gray-600 text-sm mb-6">{registry.description}</p>
              <Button 
                className={`text-white w-full font-medium py-3 px-6 rounded-lg transition-colors duration-200 ${
                  registry.color === 'red' ? 'bg-red-600 hover:bg-red-700' : 
                  registry.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
                }`}
                onClick={() => handleRegistryClick(registry.url)}
              >
                View Registry
              </Button>
            </div>
          ))}
        </div>

        {/* Alternative Gift Options */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
            Alternative Gift Ideas
          </h4>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                <i className="fas fa-plane text-accent-blue mr-2"></i>
                Honeymoon Fund
              </h5>
              <p className="text-gray-600 text-sm">
                Help us create unforgettable memories on our honeymoon adventure to New Zealand.
              </p>
            </div>
            <div>
              <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                <i className="fas fa-seedling text-accent-blue mr-2"></i>
                Home & Garden Fund
              </h5>
              <p className="text-gray-600 text-sm">
                Contribute to landscaping and garden projects at our new mountain home.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-light-blue rounded-lg">
            <p className="text-gray-700 text-sm">
              <i className="fas fa-heart text-accent-blue mr-2"></i>
              Your love and friendship mean everything to us. Thank you for being part of our special day!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
