import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+261 34 28 449 51', '+261 32 04 463 65'],
      description: 'Disponible 7j/7'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['greentanyconsulting@gmail.com'],
      description: 'Réponse sous 24h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Lot II H 12 QA Bis', 'Ankerana Ankadindramamy', 'Antananarivo - 101 Madagascar'],
      description: 'Siège social'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lundi - Vendredi: 8h - 17h', 'Samedi: 8h - 12h'],
      description: 'Service client'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à améliorer votre conformité et qualité ? Notre équipe d'experts 
            est là pour vous accompagner dans tous vos projets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Prenons contact
              </h3>
              <p className="text-muted-foreground mb-8">
                GREENTANY Consulting a l'ambition de relever les défis et s'engage à offrir 
                à ses clients dans un premier temps un diagnostic général de la performance 
                et de la conformité, en fonction des résultats d'une action d'un spécialiste 
                dans les domaines concernés et tout cela à un coût raisonnable et compétitif.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-brand transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                      <CardDescription>{info.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm font-medium text-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-brand">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Demandez un devis gratuit
                </CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nom *</label>
                    <Input placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Prénom *</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Téléphone</label>
                  <Input placeholder="+261 XX XX XXX XX" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Entreprise</label>
                  <Input placeholder="Nom de votre entreprise" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service souhaité</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Choisir un service...</option>
                    <option>HACCP</option>
                    <option>ISO 9001:2015</option>
                    <option>Audit & Inspection</option>
                    <option>Formation</option>
                    <option>Accompagnement</option>
                    <option>Certification</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea 
                    placeholder="Décrivez votre projet et vos besoins..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Envoyer ma demande
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;