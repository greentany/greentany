import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Search, Award, Cog, CheckCircle, ArrowRight, Calendar, Clock, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'Services sur la sécurité sanitaire des aliments',
      description: 'Gestion de la sécurité alimentaire',
      features: ['HACCP (Hazard Analysis Critical Control Point)', 'Gestion sur la sécurité sanitaires des aliments', "Inspection d'hygiène des industries Agroalimentaire"],
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: Cog,
      title: 'Services sur la Gestion du Système de Qualité',
      description: 'Système de Gestion de la Qualité',
      features: ['ISO 9001:2015 (système de Gestion de qualité)', 'ISO 22000:2018 (Managemenent de la sécurité des denrées alimentaires)'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: Award,
      title: 'Autres services général',
      description: "Services d'Accompagnement aux certification ",
      features: ['GLOBAL G.A.P', 'GRASP', 'HACCP','Agriculture Biologique','FLO Fair-TRADER & SPO','Rainforest Alliance','Audits SEDEX/SMETA'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: BookOpen,
      title: 'Services de Formation',
      description: "Nous nous concentrons sur la fourniture à la fois des lacunes/problèmes,puis d'une solution de bon sens",
      features: ['Méthode HACCP', "Méthode d'anylse des risques", 'Hygiène et sécurité des aliments',"Bonnes pratiques d'hygiène","Contrôle interne et audit", "Santé et sécurité de travail"],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: Users,
      title: "Services d'audit",
      description: "services d'audit",
      features: ['Audit interne: Système de management', 'Audit fournisseur', 'Audit sécurité' , 'DIAGNOSTIQUE ENVIRONNEMENTAL'],
      image: 'https://images.unsplash.com/photo-1552664199-fd31f7431a55?w=800&auto=format&fit=crop&q=60'
    },

  ];

  const processSteps = [
    {
      step: '01',
      title: 'Diagnostic initial',
      description: 'Évaluation de votre situation actuelle et identification des besoins',
      icon: ClipboardList
    },
    {
      step: '02',
      title: 'Proposition personnalisée',
      description: 'Élaboration d\'une solution sur mesure adaptée à vos objectifs',
      icon: Calendar
    },
    {
      step: '03',
      title: 'Mise en œuvre',
      description: 'Accompagnement dans la mise en place des solutions retenues',
      icon: Cog
    },
    {
      step: '04',
      title: 'Suivi & Amélioration',
      description: 'Suivi continu et optimisation des processus implantés',
      icon: ArrowRight
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-teal-900/95 z-0"></div>
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Services professionnels</span>
            </div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Nos <span className="text-amber-300">Solutions</span> Expertes
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Une gamme complète de services de conseil spécialisés dans la qualité, 
              la sécurité alimentaire et les normes sociales
            </motion.p>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/20"
              >
                Demander un devis gratuit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Services détaillés */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Services</span> Spécialisés
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins en conformité et qualité
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover="hover"
              >
                <Card className="h-full overflow-hidden rounded-2xl border border-slate-100 bg-white">
                  {/* Service Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10"></div>
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <service.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                      </div>
                      <p className="text-slate-600 mt-2">{service.description}</p>
                    </CardHeader>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      
                      <Button variant="outline" size="sm" className="group border-slate-300">
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Notre processus */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Processus</span> Éprouvé
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une méthode structurée pour garantir le succès de vos projets
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-teal-500/30 to-blue-500/30 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-6 text-white text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center w-full h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-900 to-teal-900 p-12 rounded-3xl shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-700/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-700/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Prêt à transformer votre entreprise ?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Contactez-nous dès aujourd'hui pour un diagnostic gratuit et une proposition personnalisée
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/20"
                  >
                    Demander un devis gratuit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +261 34 28 449 51
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;