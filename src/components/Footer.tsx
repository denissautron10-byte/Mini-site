import { Mail, MapPin, Instagram } from "lucide-react";
import logoImage from "../assets/Logo.png";

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
                La plateforme de collaboration entre freelances et clients, conçue pour la sérénité et la rentabilité.
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
            <p>&copy; 2026 Whalys. Tous droits réservés.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
