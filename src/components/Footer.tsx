import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const services = [
    'HACCP',
    'ISO 9001:2015',
    'Audits & Inspections',
    'Formation',
    'Accompagnement',
    'Certifications'
  ];

  const certifications = [
    'SMETA',
    'GRASP',
    'FAIRTRADE',
    'GLOBAL G.A.P.',
    'RAINFOREST ALLIANCE',
    'AGRICULTURE BIOLOGIQUE'
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <img 
                src="/lovable-uploads/5b1489c2-9ed5-4262-939a-2c0f47c3c36e.png" 
                alt="Greentany Consulting" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-muted-foreground">
                Expert en conformité depuis 2008. Consultants en sécurité, 
                qualité des aliments et des normes sociales.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-brand-glow transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-brand-glow transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-foreground mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-foreground mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert}>
                  <span className="text-muted-foreground text-sm">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-foreground font-medium">+261 34 28 449 51</p>
                  <p className="text-sm text-foreground font-medium">+261 32 04 463 65</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <p className="text-sm text-foreground font-medium">
                  greentanyconsulting@gmail.com
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-foreground">Lot II H 12 QA Bis</p>
                  <p className="text-sm text-foreground">Ankerana Ankadindramamy</p>
                  <p className="text-sm text-foreground">Antananarivo - 101 Madagascar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground">
            © 2024 Greentany Consulting. Tous droits réservés. 
            Spécialiste en qualité, sécurité alimentaire et normes sociales.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;