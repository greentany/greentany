import { motion } from 'framer-motion';
import { Calendar, Users, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      number: '15+',
      label: 'Années d\'expérience',
      description: 'Depuis 2008'
    },
    {
      icon: Users,
      number: '200+',
      label: 'Missions réalisées',
      description: 'Clients satisfaits'
    },
    {
      icon: Award,
      number: '10+',
      label: 'Certifications',
      description: 'Domaines d\'expertise'
    },
    {
      icon: Target,
      number: '100%',
      label: 'Accompagnement',
      description: 'Solutions sur mesure'
    }
  ];

  const engagements = [
    'Qualité du service',
    'Solution sur mesure',
    'Assistance en continu',
    'Confidentialité',
    'Transparence dans les coûts'
  ];

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Domaine d'Expertise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Créé depuis 2008, GREENTANY Consulting est un cabinet de conseil spécialisé 
                dans le domaine de la Qualité, de l'Hygiène, de la Santé, de la Sécurité, 
                de l'Environnement, du Développement Durable et de la RSE.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous proposons aux organisations de toute taille et de tout secteur, 
                du conseil, de l'accompagnement, de l'assistance technique, de l'audit 
                et de la formation QHSE afin de les aider à se construire sur le long terme, 
                et se projeter dans un avenir idoine de succès.
              </p>
            </div>

            {/* Engagements */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Nos Engagements</h3>
              <div className="space-y-3">
                {engagements.map((engagement, index) => (
                  <motion.div
                    key={engagement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground font-medium">{engagement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/b2e5e264-491e-427f-b50a-fcd4697c360e.png" 
                alt="Expert QHSE" 
                className="w-full rounded-2xl shadow-brand"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center p-6 hover:shadow-brand transition-all duration-300">
                    <CardContent className="space-y-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="font-medium text-foreground">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;