import { Card } from "./ui/card";
import {
  Pin,
  MessageSquare,
  History,
  BarChart3,
  Search
} from "lucide-react";

export function FeaturesDetailSection() {
  const features = [
    {
      icon: Search,
      title: "Recherche intelligente",
      description: "Retrouvez instantanément tous les feedbacks résolus par mots-clés, dates, projets ou statuts.",
      badge: "Efficacité",
      color: "teal"
    },
    {
      icon: BarChart3,
      title: "Rapports de clôture",
      description: "Quand un projet est terminé, finalisez-le et obtenez un bilan général du projet.",
      badge: "Beta",
      color: "indigo"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mt-[-180px] mr-[0px] mb-[-50px] ml-[0px]">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Une suite complète d'outils pour transformer votre gestion de feedback.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-20px] mr-[0px] mb-[0px] ml-[0px]">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Card 
                  key={index}
                  className="p-6 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg mb-3 text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 flex-1">
                      {feature.description}
                    </p>
                    {feature.title === "Rapports de clôture" && (
                      <span className="inline-flex text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
