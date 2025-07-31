import { motion } from 'framer-motion';
import { Calendar, Users, Award, Target, Shield, Leaf, BarChart2, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      number: '15+',
      label: "Années d'expérience",
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
      description: "Domaines d'expertise"
    },
    {
      icon: Target,
      number: '100%',
      label: 'Accompagnement',
      description: 'Solutions sur mesure'
    }
  ];

  const engagements = [
    { 
      icon: Shield, 
      title: 'Qualité du service', 
      description: 'Services conformes aux normes les plus strictes' 
    },
    { 
      icon: Leaf, 
      title: 'Développement durable', 
      description: "Solutions respectueuses de l'environnement" 
    },
    { 
      icon: HeartHandshake, 
      title: 'Approche client', 
      description: 'Relations basées sur la confiance et la transparence' 
    },
    { 
      icon: BarChart2, 
      title: 'Performance durable', 
      description: 'Résultats mesurables sur le long terme' 
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 px-6 py-3 rounded-full mb-6 shadow-lg"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">À propos de nous</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800">histoire</span> et notre expertise
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Depuis plus de 15 ans, nous accompagnons les entreprises dans leur démarche d'excellence 
            en matière de qualité, sécurité et développement durable
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></div>
              <span className="text-sm font-medium text-teal-700">Expertise confirmée</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">expertise</span> au service de votre performance
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Depuis 2008, GREENTANY Consulting est un cabinet de conseil spécialisé 
                dans le domaine de la Qualité, de l'Hygiène, de la Santé, de la Sécurité, 
                de l'Environnement, du Développement Durable et de la RSE.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nous proposons aux organisations de toute taille et de tout secteur, 
                du conseil, de l'accompagnement, de l'assistance technique, de l'audit 
                et de la formation QHSE pour les aider à construire leur avenir durable.
              </p>
            </div>
            {/* Engagements */}
            <div className="pt-4">
              <h3 className="text-xl font-bold text-slate-800 mb-8">Notre engagement</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {engagements.map((engagement, index) => (
                  <motion.div
                    key={engagement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <engagement.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{engagement.title}</h4>
                      <p className="text-slate-600 text-sm">{engagement.description}</p>
                    </div>
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
            className="space-y-10"
          >
            {/* Professional Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10"></div>
              <img 
                src="/african-office-1.jpg" 
                alt="Expert QHSE" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 right-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg"
              >
                <span className="font-bold">Depuis 2008</span>
              </motion.div>
            </motion.div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="border-0 shadow-none bg-gradient-to-br from-white to-slate-50 hover:shadow-md transition-all">
                    <CardContent className="p-5 flex items-center gap-5">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                        <stat.icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                        <div className="font-medium text-slate-700">{stat.label}</div>
                        <div className="text-sm text-slate-500">{stat.description}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Link to="/contact">
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all">
                Rencontrer notre équipe d'experts
              </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;