import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Search, X, Leaf, Package, Award, Globe, Shield, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Cta from '@/components/Cta';
import { AnimatedCard } from '@/components/ui/animated-card';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useSearchParams } from 'react-router-dom';

const products = [
  // ÉPICES ET INGRÉDIENTS
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
    id: 2,
    name: 'CANNELLE NON GRATTÉE',
    englishName: 'Cinnamon Unscrapped HNNG',
    botanicalName: 'Schinus terebenthifolius',
    image: '/image27.jpg',
    description: 'Cannelle non grattée, écorce naturelle préservée',
    category: 'epices',
    categoryLabel: 'Épices et Ingrédients'
  },
  {
    id: 3,
    name: 'CANNELLE GRATTÉE',
    englishName: 'Cinnamon Scrapped CZ4',
    botanicalName: 'Schinus terebenthifolius',
    image: '/image26.jpg',
    description: 'Cannelle grattée, écorce traitée pour une qualité optimale',
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
    id: 5,
    name: 'BAIES ROSES',
    englishName: 'Pink Peppercorn',
    botanicalName: 'Schinus terebenthifolius',
    image: '/image28.jpg',
    description: 'Baies roses, poivre sauvage de Madagascar',
    category: 'epices',
    categoryLabel: 'Épices et Ingrédients'
  },
  {
    id: 6,
    name: 'CURCUMA',
    englishName: 'Turmeric',
    botanicalName: 'Curcuma longa',
    image: '/image30.jpg',
    description: 'Curcuma en racines ou poudre, couleur intense',
    category: 'epices',
    categoryLabel: 'Épices et Ingrédients'
  },
  {
    id: 7,
    name: 'GINGEMBRE',
    englishName: 'Ginger',
    botanicalName: 'Zingiber officinale',
    image: '/image32.jpg',
    description: 'Gingembre frais ou séché, arôme puissant',
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
    id: 10,
    name: 'POIVRE SUAVAGE',
    englishName: 'Voatsiperifery',
    botanicalName: 'Piper Borbonense',
    image: '/image40.jpg',
    description: 'Poivre sauvage de Madagascar, saveur unique',
    category: 'epices',
    categoryLabel: 'Épices et Ingrédients'
  },
  // FRUITS ET GRAINS SECS
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
    id: 12,
    name: 'LITCHI',
    englishName: 'Lychee',
    botanicalName: 'Litchi chinensis',
    image: '/image38.jpg',
    description: 'Litchis frais, variété export, récoltés à maturité',
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
  },
  {
    id: 14,
    name: 'HARICOTS ROUGE SEC',
    englishName: 'Dried Red Beans',
    botanicalName: 'Phaseolus vulgaris',
    image: '/image34.jpg',
    description: 'Haricots rouges séchés, riches en protéines',
    category: 'fruits',
    categoryLabel: 'Fruits et Grains Secs'
  },
  {
    id: 15,
    name: 'POIS DU CAP',
    englishName: 'Cape Peas',
    botanicalName: 'Phaseolus lunatus',
    image: '/images44.jpg',
    description: 'Pois du Cap, légumineuses de qualité',
    category: 'fruits',
    categoryLabel: 'Fruits et Grains Secs'
  }
];

const categories = [
  { id: 'all', name: 'Tous les produits', icon: Package },
  { id: 'epices', name: 'Épices et Ingrédients', icon: Leaf },
  { id: 'fruits', name: 'Fruits et Grains Secs', icon: Award },
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
const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [displayedProducts, setDisplayedProducts] = useState(9);

  // Initialiser les filtres depuis les paramètres d'URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && ['all', 'epices', 'fruits'].includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Réinitialiser le compteur quand les filtres changent
  React.useEffect(() => {
    setDisplayedProducts(9);
  }, [searchTerm, selectedCategory]);
  
  const filteredProducts = products
    .filter(product => {
      // Filtre par recherche (nom français, anglais ou botanique)
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.botanicalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filtre par catégorie
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Les deux conditions doivent être vraies
      return matchesSearch && matchesCategory;
    });

  const productsToShow = filteredProducts.slice(0, displayedProducts);
  const hasMoreProducts = displayedProducts < filteredProducts.length;

  const loadMoreProducts = () => {
    setDisplayedProducts(prev => prev + 9);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Mettre à jour les paramètres d'URL
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setDisplayedProducts(9);
    setSearchParams({});
  };

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
      transition: { duration: 0.6 }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4 text-slate-800 text-lg">Catégories</h3>
        <div className="space-y-3">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:shadow-md'
              }`}
            >
                <IconComponent className="h-5 w-5" />
              {category.name}
            </button>
            );
          })}
        </div>
      </div>
      <Separator />
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-50 to-white">
      <main className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative py-16 overflow-hidden rounded-3xl mb-8"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/image42.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-emerald-900/40 to-slate-900/50"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-700">Produits d'exportation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300">Produits</span> Premium
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Une production de qualité d'épices et ingrédients d'origine Madagascar. 
              Découvrez notre sélection de produits locaux d'exception pour l'exportation internationale.
            </p>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block w-80 shrink-0"
          >
            <div className="sticky top-28 bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
              <h2 className="font-bold text-xl mb-6 text-slate-800">Filtrer les produits</h2>
              <FilterContent />
            </div>
          </motion.div>

          <div className="flex-1">
            {/* Mobile Header with Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-lg"
            >
              <div className="flex flex-col gap-6">
                {/* Search and Mobile Filter Toggle */}
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      placeholder="Rechercher par nom, nom anglais, nom botanique..."
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      className="pl-12 h-14 text-base rounded-xl border-slate-300 focus:border-emerald-500"
                    />
                  </div>
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="lg:hidden w-14 h-14 rounded-xl border-slate-300">
                        <Filter className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <SheetHeader>
                        <SheetTitle className="text-xl">Filtres</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>
                  {/* View Mode */}
                  <div className="flex gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setViewMode('grid')}
                      className={`w-14 h-14 rounded-xl ${viewMode === 'grid' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-slate-300'}`}
                    >
                      <Grid className="h-5 w-5" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setViewMode('list')}
                      className={`w-14 h-14 rounded-xl ${viewMode === 'list' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-slate-300'}`}
                    >
                      <List className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                {/* Results Count */}
                <div className="flex justify-between items-center">
                  <div className="text-slate-700">
                    <span className="font-medium">{filteredProducts.length}</span> produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}
                    {searchTerm && (
                      <span className="text-slate-500 ml-2">
                        pour "{searchTerm}"
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {selectedCategory !== 'all' && (
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                        {categories.find(c => c.id === selectedCategory)?.name}
                      </Badge>
                    )}
                    {(searchTerm || selectedCategory !== 'all') && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={resetFilters}
                        className="text-xs border-slate-300 hover:bg-slate-50"
                      >
                        <X className="h-3 w-3 mr-1" />
                        Réinitialiser
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`gap-8 ${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                  : 'space-y-8'
              }`}
            >
              {productsToShow.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                    viewMode === 'list' ? 'flex flex-row' : 'flex flex-col'
                  }`}
                >
                  <div className={`${viewMode === 'list' ? 'w-1/3 h-64' : 'w-full h-64'} relative overflow-hidden`}>
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
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-emerald-600 font-medium text-sm mb-2">
                        {product.englishName}
                      </p>
                      <p className="text-slate-500 text-xs italic mb-4">
                        {product.botanicalName}
                      </p>
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <div className="w-full pt-4 border-t border-slate-100">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 shadow-lg"
                        >
                          <a href="/contact">
                            Nous contacter
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {hasMoreProducts && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-12"
              >
                <Button 
                  onClick={loadMoreProducts}
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 rounded-xl text-base border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-700 hover:text-emerald-800"
                >
                  Voir plus de produits
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <Search className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Aucun produit trouvé</h3>
            <p className="text-slate-600 max-w-md mx-auto mb-4">
              {searchTerm ? (
                <>
                  Aucun produit ne correspond à votre recherche "<strong>{searchTerm}</strong>".
                  <br />
                  Essayez avec d'autres termes ou consultez toutes nos catégories.
                </>
              ) : (
                "Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={resetFilters}
                variant="outline"
                className="px-8 py-4 rounded-xl text-base border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-700"
              >
                Voir tous les produits
              </Button>
              {searchTerm && (
                <div className="text-sm text-slate-500">
                  Suggestions : essayez "cannelle", "vanille", "poivre", "gingembre", "curcuma"
                </div>
              )}
            </div>
          </motion.div>
        )}

       
      </main>
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
      {/* CTA Section */}
      <Cta 
        title="Besoin d'un devis personnalisé ?"
        description="Contactez-nous pour obtenir un devis détaillé de nos épices et ingrédients d'origine Madagascar"
        primaryButtonText="Demander un devis"
        primaryButtonLink="/contact"
        secondaryButtonText="greentany.exp@gmail.com"
        secondaryButtonLink="mailto:greentany.exp@gmail.com"
      />
    </div>
  );
};

export default ProductsPage;