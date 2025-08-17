import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mainServices } from '@/lib/servicesData';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Le cabinet', href: '/cabinet' },
  { label: 'Nos produit', href: '/produits' },
  { label: 'Références', href: '/references' },
  { label: 'Contact', href: '/contact' },
];

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5 text-[#33CC33] mt-0.5" />,
    label: (
      <div>
        <a href="tel:+261342844951" className="text-sm text-white font-medium hover:underline">+261 34 28 449 51</a>
        <p className="text-sm text-white font-medium">
          <a href="tel:+261320446365" className="hover:underline">+261 32 04 463 65</a>
        </p>
      </div>
    )
  },
  {
    icon: <FaWhatsapp className="h-5 w-5 text-[#33CC33] mt-0.5" />,
    label: (
      <a href="https://wa.me/261342844951" target="_blank" rel="noopener noreferrer" className="text-sm text-white font-medium hover:underline">
        +261 34 28 449 51
      </a>
    )
  },
  {
    icon: <Mail className="h-5 w-5 text-[#33CC33] mt-0.5" />,
    label: (
      <a href="mailto:contact@greentany.com" className="text-sm text-white font-medium hover:underline">
        contact@greentany.com
      </a>
    )
  },
  {
    icon: <MapPin className="h-5 w-5 text-[#33CC33] mt-0.5" />,
    label: (
      <div>
        <p className="text-sm text-white">Toamasina, Madagascar</p>
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
    <footer className="pt-12 pb-4bg-white relative overflow-hidden">
      {/* Background image + animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/footerbg.png')] bg-cover bg-center "></div>
        
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="/">
                <img
                  src="/logo1.png"
                  alt="Greentany "
                  title="Greentany"
                  className="h-24"
                />
              </a>
              
            </div>
            <p className="max-w-[70%] text-lg text-[#33CC33]">
              Expert en conformité depuis 2008. Consultants en sécurité, qualité des aliments et des normes sociales.
            </p>
            {/* Contact Info */}
            <div className="mt-4 space-y-4">
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
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="space-y-3 text-sm ">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium text-[#33CC33] hover:text-white"
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
          <p className="order-2 text-[#33CC33] lg:order-1">© 2024 Greentany Consulting. Tous droits réservés. Spécialiste en qualité, sécurité alimentaire et normes sociales.</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="text-[#33CC33] hover:text-white">
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