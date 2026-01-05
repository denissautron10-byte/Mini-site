import { motion } from "motion/react";
import { MessageSquare, Mail, PhoneOff } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 lg:mb-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Pourquoi Whalys ?
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Une solution née d'un besoin réel sur le terrain.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Founder's Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl"></div>
                {/* Placeholder for an actual image */}
                <div className="absolute inset-0 bg-slate-800 rounded-full flex items-center justify-center">
                  
                </div>
              </div>
            </motion.div>

            {/* Founder's Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="text-slate-300 space-y-4 text-base sm:text-lg">
                <p>
                  Pendant 3 ans, j'ai travaillé en tant qu'autodidacte. Mon plus gros problème n'était pas la technique, c'était le chaos :
                </p>
                <ul className="space-y-3 pt-2 bg-blue-900/50 text-slate-100 p-4 rounded-lg">
                  <li className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                    <span>Clients envoyant des briefs sur WhatsApp à 22h.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                    <span>Validations perdues dans des fils de discussion interminables.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PhoneOff className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                    <span>L'obligation d'acheter un deuxième téléphone pour sauver ma vie privée.</span>
                  </li>
                </ul>
                <p className="pt-2">
                  Je ne me voyais pas construire mon avenir sur WhatsApp ou par email. J'ai créé Whalys pour offrir aux freelances ce que j'exigeais pour moi-même : la simplicité d'un message, mais la rigueur d'un pro. Whalys n'est pas né d'une école de commerce, mais d'une volonté de travailler intelligemment, ici à La Réunion.
                </p>
              </div>
              
              <div className="pt-4 text-right">
                <p className="font-bold text-blue-300 text-lg">— Denis Sautron</p>
                <p className="text-slate-400">Fondateur de Whalys</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
