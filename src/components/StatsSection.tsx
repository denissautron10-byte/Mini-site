import { Users, Briefcase, TrendingUp, Clock } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Agences clientes",
      sublabel: "à La Réunion"
    },
    {
      icon: Briefcase,
      value: "10k+",
      label: "Projets gérés",
      sublabel: "avec succès"
    },
    {
      icon: TrendingUp,
      value: "567%",
      label: "ROI moyen",
      sublabel: "la première année"
    },
    {
      icon: Clock,
      value: "40h",
      label: "Économisées",
      sublabel: "par mois et par équipe"
    }
  ];

  return (
    null
  );
}
