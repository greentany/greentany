import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Search, Award, Cog, CheckCircle, ArrowRight, Calendar, Clock, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mainServices } from '@/lib/servicesData';
import Cta from '@/components/Cta';
import { Feature73 } from '@/components/ui/feature-73';
import EngagementConsulting from '@/components/EngagementConsulting';
import AboutConsulting from '@/components/AboutConsulting';
import References from '@/components/References';

const GreentanyConsultingPage = () => {

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
          backgroundImage: "url('/images1.jpg')",
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
              <span className="text-sm font-medium text-blue-700">Greentany Consulting</span>
            </div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Services de <span className="text-amber-300">Conseil</span> Expert
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
      
      {/* About Consulting Section */}
      <AboutConsulting />
      {/* Services détaillés avec nouveau design */}
      <Feature73
        features={mainServices.map((service, index) => ({
          id: `service-${index}`,
          title: service.title,
          description: service.description,
          image: service.image || "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
          features: service.features
        }))}
      />
      
      {/* Engagements section */}
      <EngagementConsulting />
      <div id="references-section">
        <References/>
        </div>
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
      <Cta 
        title="Prêt à transformer votre entreprise ?"
        description="Contactez-nous dès aujourd'hui pour un diagnostic gratuit et une proposition personnalisée"
        primaryButtonText="Demander un devis gratuit"
        primaryButtonLink="/contact"
        secondaryButtonText="+261 34 28 449 51"
        secondaryButtonLink="tel:+261342844951"
      />
    </div>
  );
};

export default GreentanyConsultingPage; 