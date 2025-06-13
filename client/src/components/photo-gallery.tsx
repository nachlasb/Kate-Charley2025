export default function PhotoGallery() {
  const instagramPhotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Engagement photos in the mountains"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Beautiful ceremony venue"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Lake Pend Oreille sunset"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Our favorite hiking spot"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Celebrating our love"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Adventure awaits"
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/explore/tags/unforgettablenish/', '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
            Our Journey Together
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Follow our love story and share your unforgettable memories
          </p>
          
          {/* Instagram Call-to-Action */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <i className="fab fa-instagram text-white text-3xl mr-3"></i>
              <h3 className="font-playfair text-2xl font-bold text-white">Share Your Memories</h3>
            </div>
            <p className="text-white mb-4">
              Help us capture every magical moment! Use our wedding hashtag when you post:
            </p>
            <div className="bg-white/20 rounded-lg py-3 px-6 inline-block mb-4">
              <span className="text-white font-bold text-xl">#unforgettablenish</span>
            </div>
            <p className="text-white text-sm mb-4">
              We can't wait to see the day through your eyes!
            </p>
            <button
              onClick={handleInstagramClick}
              className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              View on Instagram
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {instagramPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleInstagramClick}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <i className="fab fa-instagram text-white text-2xl mb-2"></i>
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}