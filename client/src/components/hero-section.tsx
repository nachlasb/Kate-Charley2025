export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-fixed bg-scroll"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" className="mr-4">
            <ellipse cx="32" cy="30" rx="18" ry="16" fill="#ffffff"/>
            <ellipse cx="19" cy="24" rx="6" ry="12" fill="#e5e7eb" transform="rotate(-15 19 24)"/>
            <ellipse cx="45" cy="24" rx="6" ry="12" fill="#e5e7eb" transform="rotate(15 45 24)"/>
            <ellipse cx="32" cy="38" rx="8" ry="6" fill="#e5e7eb"/>
            <circle cx="26" cy="26" r="3" fill="#1a1a1a"/>
            <circle cx="38" cy="26" r="3" fill="#1a1a1a"/>
            <circle cx="26" cy="26" r="2" fill="#8B4513"/>
            <circle cx="38" cy="26" r="2" fill="#8B4513"/>
            <circle cx="26.5" cy="25.5" r="0.8" fill="#fff"/>
            <circle cx="38.5" cy="25.5" r="0.8" fill="#fff"/>
            <ellipse cx="32" cy="36" rx="2.5" ry="2" fill="#000"/>
            <path d="M32 38 Q28 40 26 39" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M32 38 Q36 40 38 39" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold">
            Kate & Charley
          </h1>
        </div>
        <p className="text-xl md:text-2xl font-light mb-8">
          are getting married
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
          <p className="text-lg font-medium mb-2">August 15, 2024</p>
          <p className="text-base">Sandpoint, Idaho</p>
        </div>
      </div>
    </section>
  );
}
