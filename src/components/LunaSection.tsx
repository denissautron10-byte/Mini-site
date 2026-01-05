import { motion } from "motion/react";
import { Search, CheckCircle, BarChart, Rocket } from "lucide-react";
import lunaImage from "figma:asset/67e4d64410a6c4da0a5f19e051dbb273b46b1028.png";

export function LunaSection() {

  return (
    <section id="luna" className="relative py-8 sm:py-16 lg:py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Orbes de dégradé */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 text-white px-4">
              Votre assistante IA
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Luna : L'IA intégrée qui vous évite de jongler entre les onglets.
            </motion.p>
          </motion.div>

          {/* Contenu principal */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-10 lg:gap-16 items-center">
            {/* Image de Luna */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative max-w-md sm:max-w-lg lg:max-w-3xl mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-[80px] sm:blur-[100px]"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
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

            {/* Description de Luna */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 sm:space-y-10 order-2 lg:order-1"
            >
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl text-white">
                  Plus besoin de quitter votre projet
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Pourquoi ouvrir Gemini ou ChatGPT dans une autre page ? Luna est là pour formuler vos messages clients à votre place, directement dans la discussion. Elle adapte votre ton pour rester pro, même quand vous êtes pressé.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl text-white">
                  Une vision claire sur vos chantiers
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Luna analyse vos projets à la demande pour vous faire un bilan en temps réel :
                </p>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-sm"><b>Recherche intelligente :</b> "Retrouve-moi la validation sur le logo bleu de mars dernier" : elle fouille votre historique et vous sort la preuve instantanément.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-sm"><b>Gestion des tâches :</b> Elle vous dit concrètement ce qu'il reste à faire, ce qui est en attente de validation client et les points bloquants.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-sm"><b>Analyse critique :</b> Demandez-lui "Qu'est-ce qu'on peut améliorer sur ce projet ?" et elle analyse la discussion pour repérer les malentendus ou les oublis avant qu'ils ne deviennent des problèmes.</span>
                  </li>
                </ul>
              </div>

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
                    <p className="text-xs leading-relaxed text-slate-300">
                      Luna devient le moteur de recherche ultime de votre business. Elle ne se contente pas de stocker vos données, elle les comprend pour vous faire gagner 1h de gestion par jour.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
