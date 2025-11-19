import { FileX, Clock, TrendingDown, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";

export function ProblemSection() {
  const problems = [
    {
      icon: FileX,
      title: "Fichiers perdus",
      description: "Feedbacks noyés dans des emails interminables et des discussions Discord sans fin"
    },
    {
      icon: Clock,
      title: "Heures gaspillées",
      description: "Votre équipe passe plus de temps à chercher qu'à produire"
    },
    {
      icon: TrendingDown,
      title: "Stress d'équipe",
      description: "Tensions et démotivation causées par des instructions ambiguës"
    }
  ];

  return (
    <section id="fonctionnalites" className="relative bg-slate-950 overflow-hidden py-[70px] lg:py-32 py-[80px] px-[0px]">
      {/* Subtle gradient background */}

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
              Les difficultés
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Chaque feedback imprécis est de l'argent perdu sur l'année.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-slate-800/40 border border-white/10"
                >
                  <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-red-400" />
                  </div>
                  <h3 className="text-xl mb-4 text-white">{problem.title}</h3>
                  <p className="text-slate-400">{problem.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Key Stat */}
          
        </div>
      </div>
    </section>
  );
}
