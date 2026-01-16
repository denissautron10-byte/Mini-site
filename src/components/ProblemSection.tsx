import { FileX, Clock, TrendingDown } from "lucide-react";
import { Card } from "./ui/card";

export function ProblemSection() {
  const problems = [
    {
      icon: FileX,
      title: "Le fardeau du \"deuxième téléphone\"",
      description: "Jongler avec plusieurs appareils pour séparer pro et perso, et perdre du temps à chercher une info cruciale le soir."
    },
    {
      icon: Clock,
      title: "Le scroll infini",
      description: "Perdre 20 minutes à remonter un fil de discussion pour retrouver une simple validation (le bleu ou le vert ?)."
    },
    {
      icon: TrendingDown,
      title: "Les messages fantômes",
      description: "Le fameux \"je vous l'avais dit par message !\". Quand l'info est perdue, votre crédibilité et votre chiffre d'affaires diminuent."
    }
  ];

  return (
    <section id="fonctionnalites" className="relative bg-slate-950 overflow-hidden py-[70px] lg:py-32 py-[80px] px-[0px]">      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
              Les difficultés
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Chaque message perdu est une heure de vie personnelle en moins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-slate-900"
                >
                  <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-red-400" />
                  </div>
                  <h3 className="text-xl mb-4 text-white">{problem.title}</h3>
                  <p className="text-slate-400 text-sm">{problem.description}</p>
                </Card>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
