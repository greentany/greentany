import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, Eye, Heart, BookOpen, Globe, BarChart2, Shield, Wrench, LifeBuoy, Lock, BadgeDollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import References from '@/components/References';

const AboutPage = () => {

  
   
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

      {/* Nos Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Nos Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Services</span> Spécialisés
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Greentany propose deux services complémentaires pour répondre aux besoins de nos clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consulting Service */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Greentany Consulting</h3>
                  <p className="text-blue-600 font-medium">Services de Conseil</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Experts en sécurité alimentaire et normes sociales. Plus de 200 missions réalisées avec succès depuis 2008. 
                Nous accompagnons les entreprises dans leur démarche d'excellence en matière de qualité et conformité.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">HACCP et sécurité alimentaire</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Certification ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Audits SMETA et Global GAP</span>
                </div>
              </div>
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                <Link to="/greentany-consulting">Découvrir Consulting</Link>
              </Button>
            </motion.div>

            {/* Export Service */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Greentany Export</h3>
                  <p className="text-emerald-600 font-medium">Exportation d'Épices</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Producteur et grossiste d'épices et ingrédients biologiques et conventionnels d'origine Madagascar. 
                Exportation dans le monde entier depuis 2016 avec plus de 1000 paysans partenaires.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Épices d'origine Madagascar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Produits bio et conventionnels</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700">Exportation mondiale</span>
                </div>
              </div>
              <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                <Link to="/greentany-export">Découvrir Export</Link>
              </Button>
            </motion.div>
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
        {/* Clients Grid */}
        <References/>

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
    </div>
  );
};

export default AboutPage;