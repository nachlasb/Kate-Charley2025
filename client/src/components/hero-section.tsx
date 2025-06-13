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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60" height="60" className="mr-4">
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
