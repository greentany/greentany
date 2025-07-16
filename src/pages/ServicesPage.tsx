import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Search, Award, Cog, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'HACCP',
      description: 'Hazard Analysis Critical Control Point - Gestion de la sécurité alimentaire',
      features: ['Analyse des risques', 'Points critiques', 'Procédures de contrôle', 'Documentation complète'],
      price: 'Sur devis',
      duration: '2-4 semaines'
    },
    {
      icon: Cog,
      title: 'ISO 9001:2015',
      description: 'Système de Gestion de la Qualité',
      features: ['Certification qualité', 'Amélioration continue', 'Satisfaction client', 'Manuel qualité'],
      price: 'Sur devis',
      duration: '4-8 semaines'
    },
    {
      icon: Search,
      title: 'Audits & Inspections',
      description: 'Évaluations complètes de conformité',
      features: ['Audits internes', 'Inspections terrain', 'Rapports détaillés', 'Plans d\'action'],
      price: 'Sur devis',
      duration: '1-2 semaines'
    },
    {
      icon: BookOpen,
      title: 'Formation',
      description: 'Programmes de formation sur mesure',
      features: ['Formation HACCP', 'Sécurité alimentaire', 'Normes sociales', 'Certification'],
      price: 'Sur devis',
      duration: '1-5 jours'
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Support continu pour vos projets',
      features: ['Assistance technique', 'Mise en œuvre', 'Suivi personnalisé', 'Support continu'],
      price: 'Sur devis',
      duration: 'Variable'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Préparation aux certifications internationales',
      features: ['SMETA', 'GRASP', 'Fairtrade', 'Rainforest Alliance'],
      price: 'Sur devis',
      duration: '3-6 mois'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Diagnostic initial',
      description: 'Évaluation de votre situation actuelle et identification des besoins'
    },
    {
      step: '02',
      title: 'Proposition personnalisée',
      description: 'Élaboration d\'une solution sur mesure adaptée à vos objectifs'
    },
    {
      step: '03',
      title: 'Mise en œuvre',
      description: 'Accompagnement dans la mise en place des solutions retenues'
    },
    {
      step: '04',
      title: 'Suivi & Amélioration',
      description: 'Suivi continu et optimisation des processus implantés'
    }
  ];

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
              Nos Services
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Une gamme complète de services de conseil spécialisés dans la qualité, 
              la sécurité alimentaire et les normes sociales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-brand transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Durée:</span>
                        <span className="font-medium">{service.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Prix:</span>
                        <span className="font-medium">{service.price}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une méthode éprouvée pour garantir le succès de vos projets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-primary p-12 rounded-3xl shadow-brand-glow">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Prêt à commencer votre projet ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour un diagnostic gratuit et une proposition personnalisée
              </p>
              <Button variant="secondary" size="lg" className="group">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;