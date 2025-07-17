import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mainServices, certifications } from '@/lib/servicesData';

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
    label: <p className="text-sm text-foreground font-medium">greentanyconsulting@gmail.com</p>
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
    title: "Certifications",
    links: certifications.map(cert => ({ name: cert, href: '/services' }))
  },
];

const socialLinks = [
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const legalLinks = [
  { name: "Mentions légales", href: "/legal" },
  { name: "Politique de confidentialité", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="py-32 bg-card border-t">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="/">
                <img
                  src="/lovable-uploads/5b1489c2-9ed5-4262-939a-2c0f47c3c36e.png"
                  alt="Greentany Consulting"
                  title="Greentany Consulting"
                  className="h-12"
                />
              </a>
              <h2 className="text-xl font-semibold">Greentany Consulting</h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              Expert en conformité depuis 2008. Consultants en sécurité, qualité des aliments et des normes sociales.
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
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