import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "Comment fonctionne la période d\'essai gratuite ?",
      answer: "Pendant 30 jours, vous avez un accès complet à la plateforme. Vous pouvez gérer jusqu'à 5 clients, créer jusqu'à 3 projets pour chacun d'eux, et organiser vos conversations avec 5 sous-discussions par projet. C'est l'occasion idéale de découvrir comment Whalys et l'IA Luna Boost peuvent transformer votre workflow, sans aucune carte bancaire requise pour démarrer."
    },
    {
      question: "Combien de temps faut-il pour mettre en place Whalys ?",
      answer: "La mise en place est immédiate. En moins de 5 minutes, vous créez votre compte et vous pouvez déjà inviter votre premier client. Pas de formation complexe, l\'interface est pensée pour être intuitive."
    },
    {
      question: "Le support client est-il vraiment à La Réunion ?",
      answer: "Oui, 100%. Nous sommes basés à Saint-Pierre (974). Vous avez un interlocuteur local qui comprend les réalités de votre business et qui répond en français, sans passer par un robot à l\'autre bout du monde."
    },
    {
      question: "Combien coûte Whalys après la période d\'essai ?",
      answer: "Après les 30 jours d'essai gratuit, l'accès à Whalys est de 15€ par mois. Cet abonnement vous garantit un accès illimité à toutes les fonctionnalités, incluant Luna Boost, pour continuer à gérer vos projets sereinement."
    },
    {
      question: "Peut-on vraiment économiser 20 heures par mois ?",
      answer: "Largement. En supprimant le temps de recherche (deuxième téléphone, scroll WhatsApp), en automatisant votre Wiki et en évitant les réunions de \"justification\" grâce aux preuves de validation, nos utilisateurs récupèrent en moyenne 5 heures par semaine."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Vos échanges et vos fichiers sont chiffrés et stockés sur des serveurs sécurisés. Seuls vous et vos clients avez accès à vos projets. La confidentialité est notre priorité."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-md mx-auto md:max-w-none text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl mb-6 text-slate-900">
              Questions fréquentes
            </h2>
            <p className="text-base text-slate-600 mb-8">
              Tout ce que vous devez savoir pour démarrer sereinement.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-lg mx-auto md:max-w-none">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600">
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
