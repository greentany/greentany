export interface MainService {
  icon: any; // Utiliser 'any' pour l'icône, car ce sera injecté dans le composant
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface Certification {
  title: string;
  description: string;
}

import { Shield, BookOpen, Users, Award, Cog } from 'lucide-react';

export const mainServices: MainService[] = [
  {
    icon: Shield,
    title: 'Services sur la sécurité sanitaire des aliments',
    description: 'Gestion de la sécurité alimentaire',
    features: ['HACCP (Hazard Analysis Critical Control Point)', 'Gestion sur la sécurité sanitaires des aliments', "Inspection d'hygiène des industries Agroalimentaire"],
    image: '/images3.jpg'
  },
  {
    icon: Cog,
    title: 'Services sur la Gestion du Système de Qualité',
    description: 'Système de Gestion de la Qualité',
    features: ['ISO 9001:2015 (système de Gestion de qualité)', 'ISO 22000:2018 (Managemenent de la sécurité des denrées alimentaires)'],
    image: '/images2.jpg'
  },
  {
    icon: Award,
    title: 'Autres services général',
    description: "Services d'Accompagnement aux certification ",
    features: ['GLOBAL G.A.P', 'GRASP', 'HACCP','Agriculture Biologique','FLO Fair-TRADER & SPO','Rainforest Alliance','Audits SEDEX/SMETA'],
    image: '/african-office-1.jpg'
  },
  {
    icon: BookOpen,
    title: 'Services de Formation',
    description: "Nous nous concentrons sur la fourniture à la fois des lacunes/problèmes,puis d'une solution de bon sens",
    features: ['Méthode HACCP', "Méthode d'anylse des risques", 'Hygiène et sécurité des aliments',"Bonnes pratiques d'hygiène","Contrôle interne et audit", "Santé et sécurité de travail"],
    image: '/african-office.jpg'
  },
  {
    icon: Users,
    title: "Services d'audit",
    description: "services d'audit",
    features: ['Audit interne: Système de management', 'Audit fournisseur', 'Audit sécurité' , 'DIAGNOSTIQUE ENVIRONNEMENTAL'],
    image: '/images1.jpg'
  },
];

export const certifications: Certification[] = [
  {
    title: 'SMETA',
    description: 'Audit social et éthique des fournisseurs'
  },
  {
    title: 'GRASP',
    description: 'Bonnes pratiques agricoles et sociales'
  },
  {
    title: 'HACCP',
    description: 'Analyse des dangers et maîtrise des points critiques'
  },
  {
    title: 'FAIRTRADE',
    description: 'Commerce équitable et développement durable'
  },
  {
    title: 'GLOBAL G.A.P.',
    description: 'Bonnes pratiques agricoles mondiales'
  },
  {
    title: 'RAINFOREST ALLIANCE',
    description: 'Certification environnementale et sociale'
  },
  {
    title: 'AGRICULTURE BIOLOGIQUE',
    description: 'Production agricole biologique certifiée'
  }
]; 