import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      question: "Comment fonctionne la période d'essai gratuite ?",
      answer: "Vous bénéficiez de 30 jours d'essai complet sans aucune carte bancaire requise. Vous aurez accès à toutes les fonctionnalités de Whalys pour tester la plateforme avec votre équipe sur vos vrais projets."
    },
    {
      question: "Combien de temps faut-il pour mettre en place Whalys ?",
      answer: "La mise en place est immédiate. En moins de 15 minutes, votre équipe peut commencer à utiliser Whalys."
    },
    {
      question: "Que se passe-t-il avec nos données si nous arrêtons l'abonnement ?",
      answer: "Vos données vous appartiennent. Vous pouvez exporter l'intégralité de votre base de connaissances et de vos feedbacks à tout moment. Après résiliation, vous ne pourrez plus créer de studio et votre studio sera supprimé dans les 15 jours qui suivent."
    },
    {
      question: "Le support client est-il vraiment en français et local ?",
      answer: "Absolument. Notre équipe support est basée à la Réunion et parle créole si besoin. Nous répondons en moins de 2 heures pendant les horaires de bureau (GMT+4)."
    },
    {
      question: "Combien coûte Whalys après la période d'essai ?",
      answer: "Le tarif est de 20€ par personne et par mois, avec une facture spéciale pour chaque agence. Tous nos plans incluent le support, les mises à jour et l'archivage illimité."
    },
    {
      question: "Peut-on vraiment économiser 20 heures par mois ?",
      answer: "C'est à peu près le gain que nous attendons de cette application. Le gain dépend de votre volume de projets et de la taille de votre équipe."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Vos données sont hébergées sur Supabase avec chiffrement complet, conformité RGPD garantie et infrastructure de niveau entreprise. Tout est sécurisé, sauvegardé automatiquement et vous gardez le contrôle total de vos informations."
    }
  ];

  return (
    <section id="faq" className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden lg:pt-28 lg:pb-40 pt-[50px] pr-[0px] pb-[100px] pl-[0px]">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mt-[10px] rounded-[1px]">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900">
              Questions fréquentes
            </h2>
            <p className="text-lg text-slate-600">
              Tout ce que vous devez savoir.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <span className="text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className={`text-slate-600 leading-relaxed -mt-1 ${index === faqs.length - 1 ? 'pb-5' : 'pb-4'}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          
        </div>
      </div>
    </section>
  );
}