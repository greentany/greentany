import { motion } from 'framer-motion';
import { Leaf, Users, Award, Globe, Package, CheckCircle, ArrowRight, Calendar, Clock, ClipboardList, Factory, Truck, Shield, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCard } from '@/components/ui/animated-card';
import Cta from '@/components/Cta';
import { Link } from 'react-router-dom';

const GreentanyExportPage = () => {
  // Données des produits sélectionnés
  const selectedProducts = [
    {
      id: 1,
      name: 'CANNELLE EN BÂTON',
      englishName: 'Cinnamon Sticks',
      botanicalName: 'Cinnamomum zeylanicum',
      image: '/cannelle.png',
      description: 'Cannelle en bâtons de qualité supérieure, récoltée à maturité',
      category: 'epices',
      categoryLabel: 'Épices et Ingrédients'
    },
    {
      id: 4,
      name: 'GIROFLE',
      englishName: 'Cloves',
      botanicalName: 'Eugenia caryphyllus / Syzgium aromaticum L',
      image: '/girofle.png',
      description: 'Clous de girofle de qualité supérieure, séchés naturellement',
      category: 'epices',
      categoryLabel: 'Épices et Ingrédients'
    },
    {
      id: 8,
      name: 'VANILLE',
      englishName: 'Vanilla',
      botanicalName: 'Vanilla Planifolia',
      image: '/image35.jpg',
      description: 'Vanille de Madagascar, gousses premium',
      category: 'epices',
      categoryLabel: 'Épices et Ingrédients'
    },
    {
      id: 9,
      name: 'POIVRE NOIR',
      englishName: 'Black Pepper',
      botanicalName: 'Piper Nigrum',
      image: '/poivrenoir.png',
      description: 'Poivre noir de qualité supérieure',
      category: 'epices',
      categoryLabel: 'Épices et Ingrédients'
    },
    {
      id: 11,
      name: 'BANANE VERTE',
      englishName: 'Banana',
      botanicalName: 'Musa',
      image: '/banane.jpg',
      description: 'Bananes vertes fraîches, idéales pour l\'exportation',
      category: 'fruits',
      categoryLabel: 'Fruits et Grains Secs'
    },
    {
      id: 13,
      name: 'HARICOTS ŒIL NOIR',
      englishName: 'Black Eyes',
      botanicalName: 'Vigna unguiculata',
      image: '/HARICOTS ŒIL NOIR.jpg',
      description: 'Haricots œil noir, grains secs de qualité',
      category: 'fruits',
      categoryLabel: 'Fruits et Grains Secs'
    }
  ];

  const activities = [
    {
      icon: Package,
      title: 'Achats et contrôles qualité',
      description: 'Contrôle rigoureux des matières premières',
      features: ['Sélection des meilleurs fournisseurs', 'Contrôle qualité des matières premières', 'Traçabilité complète des produits'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: Factory,
      title: 'Transformation des produits',
      description: 'Production sur nos lignes de production',
      features: ['Lignes de production modernes', 'Transformation des épices', 'Processus optimisés'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60'
    },
    {
      icon: Truck,
      title: 'Conditionnement et exportation',
      description: 'Conditionnement final pour l\'exportation',
      features: ['Conditionnement aux normes internationales', 'Préparation à l\'exportation', 'Logistique d\'exportation'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Relation pérenne avec les paysans',
      description: 'Développement d\'un réseau de plusieurs milliers de paysans-partenaires',
      features: ['Mise en place de groupements et coopératives autonomes', 'Accompagnement par nos agents de terrain', 'Bonnes Pratiques Agricoles'],
      image: '/image41.jpg'

    },
    {
      icon: Award,
      title: 'Qualité des produits',
      description: 'Production d\'épices et ingrédients de qualité',
      features: ['Bonnes Pratiques d\'Hygiène', 'Itinéraires Techniques optimisés', 'Gestion de la qualité'],
      image: '/image43.jpg'
    },
    {
      icon: Shield,
      title: 'Standards de qualité',
      description: 'Respect des référentiels HACCP/ISO',
      features: ['Management de la Qualité', 'Sécurité Produit', 'Certifications internationales'],
      image: '/image42.jpg'
    }
  ];

  const stats = [
    { number: '2016', label: 'Année de création' },
    { number: '1000+', label: 'Paysans partenaires' },
    { number: '50+', label: 'Pays d\'exportation' },
    { number: '100%', label: 'Traçabilité' }
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-green-900/95 z-0"></div>
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('/image42.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-700">Producteur et Grossiste d'Épices</span>
            </div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              GREENTANY <span className="text-emerald-300">EXPORT</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Producteur et grossiste d'épices et ingrédients biologiques et conventionnels d'origine Madagascar. 
              Exportation dans le monde entier depuis 2016.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/20"
              >
                Découvrir nos produits
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                <Mail className="h-5 w-5 mr-2" />
                greentany.exp@gmail.com
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Qui sommes-nous Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">sommes-nous</span> ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nous sommes producteur et grossiste d'épices et ingrédients biologiques et conventionnels d'origine Madagascar.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">Notre Histoire</h3>
                <p className="text-slate-600 leading-relaxed">
                  Notre société GREENTANY EXPORT a été créée en 2016 à Madagascar. 
                  Depuis notre création, nous nous sommes spécialisés dans la production 
                  et l'exportation d'épices et ingrédients de qualité.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">Notre Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nous développons un réseau de plusieurs milliers de paysans-partenaires, 
                  grâce à la mise en place de groupements et coopératives autonomes. 
                  Les paysans malgaches affiliés à nos projets produisent des épices 
                  et ingrédients de qualité.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">Notre Engagement</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ils sont accompagnés, pas à pas, par nos agents de terrain, pour les 
                  Bonnes Pratiques Agricoles, les Bonnes Pratiques d'Hygiène, les 
                  Itinéraires Techniques et la Gestion.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/image41.jpg"
                  alt="Paysans malgaches"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Cta section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-900/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Votre partenaire exportateur
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Depuis 2016, GreenTany export s'impose comme un producteur et grossiste d'Epices et Ingrédients biologiques et conventionnels, d'origine Madagascar. Nous combinons savoir-faire, passion et rigueur pour offrir à nos clients des produits d'une qualité irréprochable.
            </motion.p>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-500/20 px-8 py-4 text-lg font-semibold"
                >
                  Rejoignez-nous !
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nos Activités Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Activités</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nous travaillons dans le plus strict respect des référentiels de Management 
              de la Qualité et de la Sécurité Produit (HACCP/ISO).
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                variants={itemVariants}
                whileHover="hover"
              >
                <AnimatedCard>
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                        <activity.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-xl text-slate-800">{activity.title}</CardTitle>
                    </div>
                    <p className="text-slate-600 mt-3">{activity.description}</p>
                  </CardHeader>
                  <ul className="space-y-3">
                    {activity.features.map((feature, idx) => (
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
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              POURQUOI CHOISIR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">GREENTANY EXPORT?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une relation étroite et pérenne avec les paysans malgaches
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover="hover"
              >
                <AnimatedCard showImage={true} imageSrc={value.image} imageAlt={value.title}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                          <value.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <CardTitle className="text-xl text-slate-800">{value.title}</CardTitle>
                      </div>
                      <p className="text-slate-600 mt-3">{value.description}</p>
                    </CardHeader>
                    <ul className="space-y-3">
                      {value.features.map((feature, idx) => (
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
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* NOS PRODUITS */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-700">Produits d'exportation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Produits</span> Premium
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une sélection de nos meilleurs produits d'épices et ingrédients d'origine Madagascar, 
              cultivés avec soin et préparés selon les plus hauts standards de qualité.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {selectedProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg">
                      {product.categoryLabel}
                    </Badge>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-slate-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-emerald-600 font-medium text-sm mb-2">
                        {product.englishName}
                      </p>
                      <p className="text-slate-500 text-xs italic mb-4">
                        {product.botanicalName}
                      </p>
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                    <div className="w-full pt-4 border-t border-slate-100 mt-auto">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 shadow-lg"
                        >
                          <Link to="/contact">
                            Nous contacter
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 rounded-xl text-base border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-700 hover:text-emerald-800"
            >
              <Link to="/produits">
                Voir tous nos produits
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta 
        title="Prêt à découvrir nos épices ?"
        description="Contactez-nous pour découvrir notre gamme complète d'épices et ingrédients d'origine Madagascar"
        primaryButtonText="Découvrir nos produits"
        primaryButtonLink="/produits"
        secondaryButtonText="greentany.exp@gmail.com"
        secondaryButtonLink="mailto:greentany.exp@gmail.com"
      />
    </div>
  );
};

export default GreentanyExportPage; 