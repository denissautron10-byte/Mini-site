import { motion } from "motion/react";
import { Sparkles, Heart, Star, Zap, Rocket, Code, Target } from "lucide-react";
import lunaImage from "figma:asset/67e4d64410a6c4da0a5f19e051dbb273b46b1028.png";

export function LunaSection() {
  const features = [
    {
      icon: Heart,
      title: "Empathique",
      description: "Elle comprend vos défis",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Target,
      title: "Déterminée",
      description: "Toujours orientée résultat",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Star,
      title: "Brillante",
      description: "Des conseils intelligents",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="luna" className="relative py-8 sm:py-16 lg:py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Simple gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-white px-4">
              Votre assistant IA{" "}
              
            </h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
            >
              L'assistante intelligente qui vous accompagnera dans votre projet.
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-10 lg:gap-16 items-center">
            {/* Luna Image - Simplified */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative max-w-md sm:max-w-lg lg:max-w-3xl mx-auto">
                {/* Simple glow behind Luna */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-[80px] sm:blur-[100px]"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                
                {/* Luna Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <img
                    src={lunaImage}
                    alt="Luna - Assistante Whalys"
                    className="w-full drop-shadow-2xl scale-125 py-[30px] px-[0px]"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Luna Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 sm:space-y-10 order-2 lg:order-1"
            >
              <div className="space-y-6 sm:space-y-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-3xl lg:text-4xl text-white leading-tight"
                >
                  Plus qu'une assistante,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    une alliée
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed"
                >
                  Luna incarne l'esprit de Whalys : intelligente, déterminée et toujours là pour vous guider. 
                  Elle représente la clarté, la précision et la détermination que nous apportons à votre gestion de projet.
                </motion.p>

                {/* Development notice */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="p-5 sm:p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl backdrop-blur-xl"
                >
                  <div className="flex items-start gap-4">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h4 className="text-white">Bientôt disponible</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Luna évoluera pour devenir votre copilote IA, analysant vos wikis, vos données projet 
                        et vos feedbacks pour suggérer des solutions avant votre équipe et répondre instantanément à vos questions.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}