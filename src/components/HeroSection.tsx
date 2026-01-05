import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import lunaBackground from 'figma:asset/5ef386c671094d4b166c4eeada614d21da6745da.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-950">
      
      {/* Luna Background - outside container for full coverage */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <img 
          src={lunaBackground} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover sm:object-contain sm:left-auto sm:translate-x-0 sm:right-0 sm:top-2/3 sm:-translate-y-1/2 sm:w-auto sm:h-[1000px] lg:h-[1200px] sm:scale-[1.8] lg:scale-150"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-5xl mx-auto text-center pt-12 sm:pt-16 lg:pt-20">
          {/* Badge */}
          

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 text-white max-w-4xl mx-auto px-2 sm:px-4">
            Offrez à vos clients l'expérience d'une agence
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-8 lg:px-16">
            La plateforme de collaboration entre freelances et clients, conçue pour la sérénité et la rentabilité.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-slate-400 text-sm px-4">
            {/* Removed: Essai gratuit 30 jours */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 group w-full sm:w-auto"
              asChild
            >
              <a href="https://docs.google.com/forms/d/1FmLr3DF6UZogsueZhgA-Wj4sePr2FWnJWR6u_oFIPWI/edit" target="_blank" rel="noopener noreferrer">
                Démarrer l'essai gratuit
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
          </div>

          {/* Mockup Preview */}
          <div className="relative max-w-4xl mx-auto">
            
          </div>
        </div>
      </div>
    </section>
  );
}
