import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Accompagner les entreprises dans leur démarche qualité et sécurité alimentaire pour garantir des produits sûrs et conformes.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Devenir le partenaire de référence à Madagascar pour la conformité et la certification des entreprises.'
    },
    {
      icon: Heart,
      title: 'Valeurs',
      description: 'Transparence, professionnalisme, confidentialité et accompagnement sur mesure pour chaque client.'
    }
  ];

  const team = [
    {
      name: 'Expert Senior',
      role: 'Consultant Principal HACCP',
      description: 'Plus de 10 ans d\'expérience dans la sécurité alimentaire'
    },
    {
      name: 'Spécialiste ISO',
      role: 'Consultant ISO 9001:2015',
      description: 'Expert en systèmes de management de la qualité'
    },
    {
      name: 'Auditeur Certifié',
      role: 'Responsable Audits',
      description: 'Certifié pour les audits SMETA, GRASP et Global GAP'
    }
  ];

  const sectors = [
    'Industrie automobile',
    'Télécommunications',
    'Industries alimentaires',
    'Agriculture et agroalimentaire',
    'Textile et confection',
    'Cosmétiques et pharmacie',
    'Logistique et transport',
    'Services et consulting'
  ];

  const certifications = [
    'HACCP - Hazard Analysis Critical Control Points',
    'ISO 9001:2015 - Management de la qualité',
    'SMETA - Sedex Members Ethical Trade Audit',
    'GRASP - Global Risk Assessment on Social Practice',
    'FAIRTRADE - Commerce équitable',
    'GLOBAL G.A.P. - Bonnes pratiques agricoles',
    'RAINFOREST ALLIANCE - Certification durable',
    'AGRICULTURE BIOLOGIQUE - Certification bio'
  ];

  const stats = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '200+', label: 'Missions réalisées' },
    { number: '50+', label: 'Clients satisfaits' },
    { number: '100%', label: 'Accompagnement' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              À propos de <span className="text-primary">Greentany Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Depuis 2008, nous sommes votre partenaire de confiance pour la qualité, 
              la sécurité alimentaire et les normes sociales à Madagascar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre engagement
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des valeurs fortes qui guident notre action quotidienne
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-gradient-card shadow-card hover:shadow-brand-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre équipe d'experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des consultants expérimentés à votre service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full shadow-card hover:shadow-brand-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-center text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-center text-primary font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Secteurs d'activité
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous intervenons dans de nombreux secteurs d'activité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="p-3 text-sm font-medium w-full justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {sector}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications et accréditations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous maîtrisons les principales normes et certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-background rounded-lg shadow-sm hover:shadow-card transition-shadow duration-300"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins en qualité et sécurité alimentaire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;