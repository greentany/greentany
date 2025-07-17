export interface MainService {
  icon: any; // Utiliser 'any' pour l'icône, car ce sera injecté dans le composant
  title: string;
  description: string;
  features: string[];
  image: string;
}

import { Shield, BookOpen, Users, Award, Cog } from 'lucide-react';

export const mainServices: MainService[] = [
  {
    icon: Shield,
    title: 'Services sur la sécurité sanitaire des aliments',
    description: 'Gestion de la sécurité alimentaire',
    features: ['HACCP (Hazard Analysis Critical Control Point)', 'Gestion sur la sécurité sanitaires des aliments', "Inspection d'hygiène des industries Agroalimentaire"],
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop&q=60'
  },
  {
    icon: Cog,
    title: 'Services sur la Gestion du Système de Qualité',
    description: 'Système de Gestion de la Qualité',
    features: ['ISO 9001:2015 (système de Gestion de qualité)', 'ISO 22000:2018 (Managemenent de la sécurité des denrées alimentaires)'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60'
  },
  {
    icon: Award,
    title: 'Autres services général',
    description: "Services d'Accompagnement aux certification ",
    features: ['GLOBAL G.A.P', 'GRASP', 'HACCP','Agriculture Biologique','FLO Fair-TRADER & SPO','Rainforest Alliance','Audits SEDEX/SMETA'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60'
  },
  {
    icon: BookOpen,
    title: 'Services de Formation',
    description: "Nous nous concentrons sur la fourniture à la fois des lacunes/problèmes,puis d'une solution de bon sens",
    features: ['Méthode HACCP', "Méthode d'anylse des risques", 'Hygiène et sécurité des aliments',"Bonnes pratiques d'hygiène","Contrôle interne et audit", "Santé et sécurité de travail"],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60'
  },
  {
    icon: Users,
    title: "Services d'audit",
    description: "services d'audit",
    features: ['Audit interne: Système de management', 'Audit fournisseur', 'Audit sécurité' , 'DIAGNOSTIQUE ENVIRONNEMENTAL'],
    image: 'https://images.unsplash.com/photo-1552664199-fd31f7431a55?w=800&auto=format&fit=crop&q=60'
  },
];

export const certifications: string[] = [
  'SMETA',
  'GRASP',
  'HACCP',
  'FAIRTRADE',
  'GLOBAL G.A.P.',
  'RAINFOREST ALLIANCE',
  'AGRICULTURE BIOLOGIQUE'
]; 