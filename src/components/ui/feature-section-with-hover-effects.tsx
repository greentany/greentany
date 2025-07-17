import { cn } from "@/lib/utils";
import {
  Terminal,
  Cloud,
  DollarSign,
  MoveRight,
  Heart,
  HelpCircle,
  Repeat,
  Zap,
  Car,
  Phone,
  Utensils,
  Wheat,
  Shirt,
  FlaskConical,
  Truck,
  Briefcase,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Industrie automobile",
      description: "Qualité, sécurité et conformité pour l'industrie automobile et ses sous-traitants.",
      icon: <Car />,
    },
    {
      title: "Télécommunications",
      description: "Accompagnement des opérateurs et fournisseurs en télécoms pour la conformité et la performance.",
      icon: <Phone />,
    },
    {
      title: "Industries alimentaires",
      description: "Sécurité alimentaire, HACCP, et certifications pour les industries agroalimentaires.",
      icon: <Utensils />,
    },
    {
      title: "Agriculture et agroalimentaire",
      description: "Bonnes pratiques agricoles, certifications bio et export pour les filières agricoles.",
      icon: <Wheat />,
    },
    {
      title: "Textile et confection",
      description: "Normes sociales, qualité et traçabilité pour le secteur textile et habillement.",
      icon: <Shirt />,
    },
    {
      title: "Cosmétiques et pharmacie",
      description: "Conformité réglementaire, qualité et sécurité pour les produits cosmétiques et pharmaceutiques.",
      icon: <FlaskConical />,
    },
    {
      title: "Logistique et transport",
      description: "Optimisation, sécurité et conformité des chaînes logistiques et de transport.",
      icon: <Truck />,
    },
    {
      title: "Services et consulting",
      description: "Accompagnement, formation et conseil pour tous les secteurs d'activité.",
      icon: <Briefcase />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}; 