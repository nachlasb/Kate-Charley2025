import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-wedding-slate text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-light mb-4">Kate & Charley</h3>
          <p className="text-slate-300 mb-6">June 15, 2024 • Sandpoint, Idaho</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => window.location.href = 'mailto:kateandcharley2024@gmail.com'}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </button>
            <button
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="h-6 w-6" />
            </button>
          </div>
          
          <p className="text-sm text-slate-400">
            We can't wait to share this special day with you! ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
