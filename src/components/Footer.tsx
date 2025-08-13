import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mainServices } from '@/lib/servicesData';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos services', href: '/services' },
  { label: 'Nos produits', href: '/produits' },
  { label: 'À propos', href: '/apropos' },
  { label: 'Contact', href: '/contact' },
];

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5 text-primary mt-0.5" />,
    label: (
      <div>
        <p className="text-sm text-foreground font-medium">+261 34 28 449 51</p>
        <p className="text-sm text-foreground font-medium">+261 32 04 463 65</p>
      </div>
    )
  },
  {
    icon: <Mail className="h-5 w-5 text-primary mt-0.5" />,
    label: <p className="text-sm text-foreground font-medium">contact@greentany.com</p>
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary mt-0.5" />,
    label: (
      <div>
        <p className="text-sm text-foreground">Lot II H 12 QA Bis</p>
        <p className="text-sm text-foreground">Ankerana Ankadindramamy</p>
        <p className="text-sm text-foreground">Antananarivo - 101 Madagascar</p>
      </div>
    )
  }
];

const sections = [
  {
    title: "Navigation",
    links: navItems.map(item => ({ name: item.label, href: item.href }))
  },
  {
    title: "Nos Services",
    links: mainServices.map(service => ({ name: service.title, href: '/services' }))
  },
  {
    title: "Nos Produits",
    links: [
      { name: 'Tous les produits', href: '/produits' },
      { name: 'Épices et Ingrédients', href: '/produits?category=epices' },
      { name: 'Fruits et Grains Secs', href: '/produits?category=fruits' }
    ]
  },
];

const legalLinks = [
  { name: "Mentions légales", href: "/legal" },
  { name: "Politique de confidentialité", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-white relative overflow-hidden">
      {/* Animated Radial Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-blue-400/20 to-transparent animate-gradient-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/30 via-green-400/20 to-transparent animate-gradient-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-green-300/40 to-transparent animate-gradient-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-blue-300/40 to-transparent animate-gradient-pulse" style={{ animationDelay: '0.75s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="/">
                <img
                  src="/logo.jpg"
                  alt="Greentany "
                  title="Greentany"
                  className="h-12"
                />
              </a>
              <h2 className="text-xl font-semibold">Greentany</h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              Expert en conformité depuis 2008. Consultants en sécurité, qualité des aliments et des normes sociales.
            </p>
            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          {/* Navigation */}
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          </div>
          {/* Legal Links */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">© 2024 Greentany Consulting. Tous droits réservés. Spécialiste en qualité, sécurité alimentaire et normes sociales.</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <Link to={link.href}> {link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;