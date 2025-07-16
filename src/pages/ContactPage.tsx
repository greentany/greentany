import Contact from '@/components/Contact';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos projets qualité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: 'Appelez-nous',
                info: '+261 34 28 449 51',
                subinfo: 'Lun-Ven 8h-17h'
              },
              {
                icon: Mail,
                title: 'Écrivez-nous',
                info: 'greentanyconsulting@gmail.com',
                subinfo: 'Réponse sous 24h'
              },
              {
                icon: MapPin,
                title: 'Visitez-nous',
                info: 'Antananarivo, Madagascar',
                subinfo: 'Sur rendez-vous'
              },
              {
                icon: Clock,
                title: 'Horaires',
                info: 'Lun-Ven: 8h-17h',
                subinfo: 'Sam: 8h-12h'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-brand transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-primary font-medium">{item.info}</p>
                <p className="text-sm text-muted-foreground">{item.subinfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section principale */}
      <Contact />

      {/* Map Section (placeholder) */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted/50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Notre Localisation
            </h3>
            <p className="text-muted-foreground mb-6">
              Lot II H 12 QA Bis, Ankerana Ankadindramamy<br />
              Antananarivo - 101 Madagascar
            </p>
            <div className="h-64 bg-gradient-primary/10 rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                Carte interactive disponible bientôt
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;