import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Search, Award, Cog } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'HACCP',
      description: 'Hazard Analysis Critical Control Point - Gestion de la sécurité alimentaire',
      features: ['Analyse des risques', 'Points critiques', 'Procédures de contrôle']
    },
    {
      icon: Cog,
      title: 'ISO 9001:2015',
      description: 'Système de Gestion de la Qualité',
      features: ['Certification qualité', 'Amélioration continue', 'Satisfaction client']
    },
    {
      icon: Search,
      title: 'Audits & Inspections',
      description: 'Évaluations complètes de conformité',
      features: ['Audits internes', 'Inspections terrain', 'Rapports détaillés']
    },
    {
      icon: BookOpen,
      title: 'Formation',
      description: 'Programmes de formation sur mesure',
      features: ['Formation HACCP', 'Sécurité alimentaire', 'Normes sociales']
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Support continu pour vos projets',
      features: ['Assistance technique', 'Mise en œuvre', 'Suivi personnalisé']
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Préparation aux certifications internationales',
      features: ['SMETA', 'GRASP', 'Fairtrade', 'Rainforest Alliance']
    }
  ];

  const certifications = [
    'SMETA', 'GRASP', 'HACCP', 'FAIRTRADE',
    'GLOBAL G.A.P.', 'RAINFOREST ALLIANCE', 'AGRICULTURE BIOLOGIQUE'
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de services de conseil spécialisés dans la qualité, 
            la sécurité alimentaire et les normes sociales
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Certifications & Normes
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card px-6 py-3 rounded-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-sm"
              >
                <span className="font-medium text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;