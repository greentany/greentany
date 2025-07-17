import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, Eye, Heart, BookOpen, Globe, BarChart2, Shield, Wrench, LifeBuoy, Lock, BadgeDollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';
import Partners from '@/components/Partners';

const AboutPage = () => {

  const clients = [
    { 
      name: 'Toyota', 
      category: 'Automobile',
      testimonial: "Leur expertise en conformité nous a permis d'améliorer nos processus de qualité de manière significative.",
      image: '/path/to/toyota-logo.png' 
    },
    { 
      name: 'LITE', 
      category: 'Télécommunications',
      testimonial: "Un accompagnement exceptionnel dans la mise en place de notre système de gestion qualité.",
      image: '/path/to/lite-logo.png' 
    },
    { 
      name: 'SCIM Madagascar', 
      category: 'Industrie',
      testimonial: "Grâce à GREENTANY, nous avons obtenu la certification ISO 9001 dans un temps record.",
      image: '/path/to/scim-logo.png' 
    },
    { 
      name: 'EXA Trading', 
      category: 'Commerce',
      testimonial: "Leur approche sur mesure a transformé notre gestion de la sécurité alimentaire.",
      image: '/path/to/exa-logo.png' 
    },
    { 
      name: 'CFM', 
      category: 'Finance',
      testimonial: "Un partenaire fiable pour nos audits qualité et conformité réglementaire.",
      image: '/path/to/cfm-logo.png' 
    },
    { 
      name: 'MALGAPRO', 
      category: 'Agriculture',
      testimonial: "Leur expertise nous a aidé à obtenir la certification Global G.A.P. pour nos produits.",
      image: '/path/to/malcapro-logo.png' 
    },
    { 
      name: 'Groupe Sodiat', 
      category: 'Agroalimentaire',
      testimonial: "Un accompagnement professionnel qui a boosté notre conformité et notre productivité.",
      image: '/path/to/sodiat-logo.png' 
    },
    { 
      name: 'Gasyfruits', 
      category: 'Fruits & Légumes',
      testimonial: "Leur formation HACCP a été déterminante pour notre certification internationale.",
      image: '/path/to/gasyfruits-logo.png' 
    },]
   
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

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Accompagner les entreprises dans leur démarche qualité et sécurité alimentaire pour garantir des produits sûrs et conformes.',
      color: 'from-blue-600 to-teal-600'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Devenir le partenaire de référence à Madagascar pour la conformité et la certification des entreprises.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Valeurs',
      description: 'Transparence, professionnalisme, confidentialité et accompagnement sur mesure pour chaque client.',
      color: 'from-emerald-500 to-green-600'
    }
  ];

  const team = [
    {
      name: 'Expert Senior',
      role: 'Consultant Principal HACCP',
      description: 'Plus de 10 ans d\'expérience dans la sécurité alimentaire',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
      phone: '+261 34 28 449 51',
      email: 'greentanyconsulting@gmail.com',
    },
    {
      name: 'Spécialiste ISO',
      role: 'Consultant ISO 9001:2015',
      description: 'Expert en systèmes de management de la qualité',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
      phone: '+261 32 04 463 65',
      email: 'greentanyconsulting@gmail.com',
    },
    {
      name: 'Auditeur Certifié',
      role: 'Responsable Audits',
      description: 'Certifié pour les audits SMETA, GRASP et Global GAP',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
      phone: '+261 34 28 449 51',
      email: 'greentanyconsulting@gmail.com',
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
    { number: '15+', label: 'Années d\'expérience', icon: BookOpen },
    { number: '200+', label: 'Missions réalisées', icon: Globe },
    { number: '50+', label: 'Clients satisfaits', icon: Users },
    { number: '100%', label: 'Accompagnement', icon: BarChart2 }
  ];

  const engagementIntro = `Greentany Consulting a l'ambition de relever les défis et s'engage à offrir à ses clients un diagnostic général de la performance et de la conformité, en fonction des résultats d'une action d'un spécialiste dans les domaines concernés, et tout cela à un coût raisonnable et compétitif.`;

  const engagements = [
    {
      icon: Shield,
      title: 'Qualité du service',
      description: 'Nous garantissons un haut niveau de qualité dans toutes nos prestations.'
    },
    {
      icon: Wrench,
      title: 'Solution sur mesure',
      description: 'Chaque client bénéficie d’une approche personnalisée et adaptée à ses besoins.'
    },
    {
      icon: LifeBuoy,
      title: 'Assistance continue',
      description: 'Un accompagnement et un support tout au long de votre démarche.'
    },
    {
      icon: Lock,
      title: 'Confidentialité',
      description: 'Vos informations et projets sont traités avec la plus grande discrétion.'
    },
    {
      icon: BadgeDollarSign,
      title: 'Transparence dans les coûts',
      description: 'Des tarifs clairs, compétitifs et sans surprise.'
    },
  ];

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
              <span className="text-sm font-medium text-blue-700">Depuis 2008</span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              À propos de <span className="text-amber-300">Greentany Consulting</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Votre partenaire de confiance pour la qualité, la sécurité alimentaire et les normes sociales à Madagascar.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-slate-600">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">engagement</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {engagementIntro}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {engagements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-teal-600"></div>
                  <CardHeader className="pt-6 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Notre équipe <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">d'experts</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Des consultants expérimentés à votre service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader className="pt-6 pb-4">
                    <CardTitle className="text-xl text-slate-800">{member.name}</CardTitle>
                    <div className="text-blue-600 font-medium">{member.role}</div>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-slate-600">
                      {member.description}
                    </p>
                    {member.phone && (
                      <div className="mt-2">
                        <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline text-sm">
                          {member.phone}
                        </a>
                      </div>
                    )}
                    {member.email && (
                      <div>
                        <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline text-sm">
                          {member.email}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Secteurs</span> d'activité
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nous intervenons dans de nombreux secteurs d'activité et proposons des expertises variées pour répondre à vos besoins.
            </p>
          </motion.div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Clients satisfaits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Ils nous font <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">confiance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            "Plus de 200 missions réalisées pour des entreprises leaders dans leurs secteurs"
          </p>
        </motion.div>
        {/* Clients Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card className="h-full rounded-2xl overflow-hidden border border-slate-100 bg-white">
                {/* Client Logo */}
                <div className="relative h-40 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10"></div>
                  <div className="w-24 h-24 rounded-full bg-white p-4 shadow-md flex items-center justify-center z-20">
                    {client.image ? (
                      <img 
                        src={client.image} 
                        alt={client.name} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-blue-600">
                      {client.name.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="font-bold text-xl text-slate-800 mb-1">{client.name}</h3>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-4">
                      {client.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

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
                    asChild
                    variant="default" 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/20"
                  >
                    <Link to="/contact">Nous contacter</Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                  >
                    <Link to="/services">Découvrir nos services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Partners/>
    </div>
  );
};

export default AboutPage;