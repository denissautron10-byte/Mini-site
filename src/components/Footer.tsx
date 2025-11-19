import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import logoImage from "figma:asset/16f0abb50a20715ea567e2562756298d4ee4faa0.png";

// Threads icon component
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.186 3.003c2.03 0 3.687.593 4.933 1.761 1.246 1.169 1.87 2.78 1.87 4.808h-2.885c0-1.23-.328-2.156-.98-2.764-.652-.608-1.602-.914-2.848-.914-1.246 0-2.196.306-2.848.914-.652.608-.98 1.534-.98 2.764 0 .608.11 1.141.328 1.598.218.457.537.838.956 1.141.42.304.924.533 1.513.686.589.153 1.246.23 1.97.23 1.63 0 2.994.38 4.09 1.141 1.097.76 1.645 1.902 1.645 3.424 0 2.028-.624 3.639-1.87 4.808-1.246 1.169-2.903 1.761-4.933 1.761-2.03 0-3.687-.593-4.933-1.761-1.246-1.169-1.87-2.78-1.87-4.808h2.885c0 1.23.328 2.156.98 2.764.652.608 1.602.914 2.848.914 1.246 0 2.196-.306 2.848-.914.652-.608.98-1.534.98-2.764 0-.608-.11-1.141-.328-1.598-.218-.457-.537-.838-.956-1.141-.42-.304-.924-.533-1.513-.686-.589-.153-1.246-.23-1.97-.23-1.63 0-2.994-.38-4.09-1.141-1.097-.76-1.645-1.902-1.645-3.424 0-2.028.624-3.639 1.87-4.808C8.499 3.596 10.156 3.003 12.186 3.003z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">

      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <img 
                  src={logoImage} 
                  alt="Whalys Logo" 
                  className="w-11 h-11 object-contain" 
                />
              </div>
              
              {/* Description */}
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                La plateforme de suivi qui transforme le chaos du feedback en profit net pour les agences de design.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/whalystudio/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Produit</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#fonctionnalites" className="hover:text-blue-400 transition-colors">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#tarifs" className="hover:text-blue-400 transition-colors">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#luna" className="hover:text-blue-400 transition-colors">
                    IA
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-blue-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  
                </li>
                <li>
                  
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                  <a href="https://mail.google.com/mail/?view=cm&to=whalystudio@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    whalystudio@gmail.com
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span>Saint-Pierre<br />La Réunion, 974</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>&copy; 2025 Whalys. Tous droits réservés.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}