import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Essai gratuit",
      price: "0",
      users: "30 jours d'essai",
      features: [
        "Gérez jusqu'à 5 clients.",
        "Jusqu'à 3 projets par client.",
        "5 sous-discussions par projet.",
        "Archivage illimité.",
        "Support local.",
        "IA Luna Boost."
      ]
    }
  ];

  return (
    <section id="tarifs" className="bg-slate-900 lg:py-28 px-[0px] py-[70px] pt-[60px] pr-[0px] pb-[50px] pl-[0px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-white">
              Les tarifs
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Un tarif simple pour viser les sommets.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className="p-8 bg-transparent border-2 border-white shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl mb-2 text-white">{plan.name}</h3>
                  <p className="text-white/80 mb-4">{plan.users}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl text-white">{plan.price}€</span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">Puis 15€/mois</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100" asChild>
                  <a href="https://docs.google.com/forms/d/1FmLr3DF6UZogsueZhgA-Wj4sePr2FWnJWR6u_oFIPWI/edit" target="_blank" rel="noopener noreferrer">
                    Essai gratuit
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            
          </div>
        </div>
      </div>
    </section>
  );
}
