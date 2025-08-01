import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import References from '@/components/References';
import Cta from '@/components/Cta';
import ValeurAjoutee from '@/components/ValeurAjoutee';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Partners from '@/components/Partners';

const Home = () => {

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
    <main>
      <Hero />
      <About />
      <Services />
      <ValeurAjoutee />
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
      <References />
      <Cta 
        title="Prêt à commencer votre transformation ?"
        description="Découvrez comment nos experts peuvent vous accompagner vers l'excellence opérationnelle"
        primaryButtonText="Découvrir nos services"
        primaryButtonLink="/services"
        secondaryButtonText="Nous contacter"
        secondaryButtonLink="/contact"
      />
      <Partners/>
    </main>
  );
};

export default Home;