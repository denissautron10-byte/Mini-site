import { Users, Mail, MessageSquarePlus, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "./ui/card";

export function SolutionSection() {
  const features = [
    {
      icon: Users,
      title: "1. Centralisation intelligente",
      description: "Naviguez entre vos clients et vos projets en un clic. Grâce à notre menu intuitif, jonglez d'un projet à l'autre sans jamais perdre le fil. Séparez enfin votre vie pro et perso : votre business tient dans une seule application, propre et organisée.",
      color: "blue"
    },
    {
      icon: Mail,
      title: "2. Invitation simple",
      description: "Partagez un lien d'invitation unique. Votre client clique, saisit son code, et il est dans votre univers. Aucune création de compte n'est requise pour lui : la simplicité absolue pour un professionnalisme immédiat.",
      color: "orange"
    },
    {
      icon: MessageSquarePlus,
      title: "3. Sous-discussions",
      description: "Ne mélangez plus tout. Pour chaque discussion projet, créez jusqu'à 5 sous-discussions dédiées (ex: \"Logo\", \"Retouches Vidéo\", \"Facturation\"). Chaque média (photo, vidéo, vocal) est attaché à sa discussion précise. Besoin de retrouver le brief du logo ? Ouvrez la discussion \"Logo\". Tout est là, rien ne se perd dans le flux global.",
      color: "purple"
    },
    {
      icon: ShieldCheck,
      title: "4. La preuve par Wiki",
      description: "Chaque étape clé est validée d'un clic et archivée. S'il y a un doute ou une demande de retouche supplémentaire, vous avez la preuve irréfutable de ce qui a été dit et accepté, protégeant ainsi votre crédibilité et votre temps.",
      color: "blue"
    }
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600" }
  };

  return (
    <section className="bg-slate-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-slate-900">
              Une méthode, pas juste un outil
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Une suite complète pour structurer votre réussite et ne plus jamais mélanger les dossiers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const colors = colorClasses[feature.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center ${colors.bg} ${colors.text}`}>
                        <feature.icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
