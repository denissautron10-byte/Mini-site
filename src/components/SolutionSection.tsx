import { Pin, Target, MessageSquare, BookOpen, X, ZoomIn } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import screenshotPoleCible from "figma:asset/b65090187496fbd3a59e9c58d6ccdf5bb0eb0f31.png";
import screenshotFeedback from "figma:asset/b87fd4baa2ea313ad767134e20fe7f9ba5595f9d.png";
import screenshotEpingle from "figma:asset/3f2a6aead57a6996702fda6fd4aa98b88f8c13c4.png";
import screenshotWiki from "figma:asset/3b1f86e1d368b4a4ad4c536637fa5a661ba449e3.png";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function SolutionSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  // Bloquer le scroll du body quand la lightbox est ouverte
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);
  const features = [
    {
      icon: Target,
      number: "01",
      title: "Le pôle cible",
      subtitle: "Fini les distractions",
      description: "Assignez automatiquement le feedback au bon membre de l'équipe. Designers, développeurs, chefs de projet : chacun reçoit uniquement ce qui le concerne.",
      color: "purple"
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "L'épingle précise",
      subtitle: "Autour du feedback",
      description: "Discutez en temps réel avec les membres de l'équipe concernés puis résolvez le problème grâce à un commentaire ciblé. Vous avez la possibilité d'importer une autre photo de la potentielle solution.",
      color: "blue"
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Wiki",
      subtitle: "Début de l'apprentissage",
      description: "Construisez une base de connaissances qui évite de refaire les mêmes erreurs. Retrouvez un feedback résolu il y a 6 mois, c'est possible !",
      color: "green"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
      gradient: "from-blue-50 to-blue-100"
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-200",
      gradient: "from-purple-50 to-purple-100"
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      border: "border-green-200",
      gradient: "from-green-50 to-green-100"
    }
  };

  return (
    <section className="lg:py-32 bg-slate-50 py-[120px] px-[0px] py-[130px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto mt-[-50px] mr-[0px] mb-[0px] ml-[0px]">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-slate-900">
              La solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Trois fonctionnalités pour ne plus perdre de temps.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="space-y-32 mt-[-30px] mr-[0px] mb-[0px] ml-[0px]">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = colorClasses[feature.color as keyof typeof colorClasses];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col lg:flex-row gap-10 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <div className="flex-shrink-0 w-full lg:w-[380px] space-y-6">
                      {/* Number Badge */}
                      <div className="inline-flex items-center gap-3">
                        <div className={`relative w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Icon className={`w-8 h-8 ${colors.text} relative z-10`} />
                          <div className={`absolute inset-0 ${colors.bg} rounded-2xl blur-xl opacity-50`}></div>
                        </div>
                        <span className={`text-5xl ${colors.text} opacity-20`}>{feature.number}</span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-3xl lg:text-4xl text-slate-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className={`text-sm ${colors.text} uppercase tracking-wider`}>
                            {feature.subtitle}
                          </p>
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Image Side - Simple et Clean */}
                    <div className="flex-1 min-w-0">
                      {index === 0 && (
                        <div className="relative group cursor-pointer" onClick={() => setSelectedImage({ src: screenshotFeedback, alt: "Interface de gestion de feedback" })}>
                          {/* Zoom indicator */}
                          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                            <ZoomIn className="w-4 h-4 text-slate-700" />
                          </div>
                          
                          {/* Image container - Simple */}
                          <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 group-hover:shadow-2xl transition-all duration-300">
                            <img 
                              src={screenshotFeedback}
                              alt="Interface de gestion de feedback"
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="relative group cursor-pointer" onClick={() => setSelectedImage({ src: screenshotEpingle, alt: "Interface d'épingle de feedback" })}>
                          {/* Zoom indicator */}
                          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                            <ZoomIn className="w-4 h-4 text-slate-700" />
                          </div>
                          
                          {/* Image container - Simple */}
                          <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 group-hover:shadow-2xl transition-all duration-300">
                            <ImageWithFallback 
                              src={screenshotEpingle}
                              alt="Interface d'épingle de feedback"
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="relative group cursor-pointer" onClick={() => setSelectedImage({ src: screenshotWiki, alt: "Interface Wiki de Whalys" })}>
                          {/* Zoom indicator */}
                          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                            <ZoomIn className="w-4 h-4 text-slate-700" />
                          </div>
                          
                          {/* Image container - Simple */}
                          <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 group-hover:shadow-2xl transition-all duration-300">
                            <ImageWithFallback 
                              src={screenshotWiki}
                              alt="Interface Wiki de Whalys"
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-7xl max-h-[90vh] overflow-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}