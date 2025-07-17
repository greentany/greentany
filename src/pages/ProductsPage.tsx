import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const products = [
  {
    id: 1,
    name: 'Vanille Bourbon',
    slug: 'vanille-bourbon',
    image: '/vanille-bourbon.jpg',
    description: 'Vanille de Madagascar, gousses premium pour exportation agroalimentaire et cosmétique',
    features: ['Gousses entières', 'Taux de vanilline élevé', 'Origine certifiée', 'Conditionnement sur mesure'],
    category: 'epices',
    categoryLabel: 'Épices',
    
    format: 'Sacs de 1kg, 5kg, 25kg',
  },
  {
    id: 2,
    name: 'Cannelle',
    slug: 'cannelle',
    image: '/cannelle-scaled.jpeg',
    description: 'Cannelle en bâtons ou poudre, récoltée à maturité, idéale pour l’export',
    features: ['Bâtons entiers ou poudre', 'Arôme intense', 'Sélection manuelle', 'Emballage export'],
    category: 'epices',
    categoryLabel: 'Épices',
    
    format: 'Sacs de 5kg, 25kg',
  },
  {
    id: 3,
    name: 'Girofle (Clous de girofle)',
    slug: 'girofle',
    image: '/girofle.jpg',
    description: 'Clous de girofle de qualité supérieure, séchés naturellement',
    features: ['Taux d’humidité contrôlé', 'Tri manuel', 'Origine Madagascar', 'Exportation en vrac'],
    category: 'epices',
    categoryLabel: 'Épices',
    
    format: 'Sacs de 25kg',
  },
  {
    id: 4,
    name: 'Curcuma',
    slug: 'curcuma',
    image: '/curcuma.jpg',
    description: 'Curcuma en racines ou poudre, couleur intense, pour l’industrie alimentaire',
    features: ['Racines entières ou poudre', 'Séché au soleil', 'Sans additif', 'Conditionnement export'],
    category: 'epices',
    categoryLabel: 'Épices',
    
    format: 'Sacs de 5kg, 25kg',
  },
  {
    id: 5,
    name: 'Gingembre',
    slug: 'gingembre',
    image: '/gingenbre.jpg',
    description: 'Gingembre frais ou séché, arôme puissant, exportation en gros volumes',
    features: ['Frais ou séché', 'Calibrage export', 'Origine Madagascar', 'Emballage adapté'],
    category: 'epices',
    categoryLabel: 'Épices',
    
    format: 'Cartons de 10kg, 20kg',
  },
  {
    id: 6,
    name: 'Litchi',
    slug: 'litchi',
    image: '/Litchi-1.webp',
    description: 'Litchis frais, variété export, récoltés à maturité, expédition rapide',
    features: ['Fruits frais', 'Calibrage export', 'Récolte saisonnière', 'Expédition aérienne'],
    category: 'fruits',
    categoryLabel: 'Fruits',
    
    format: 'Cartons de 2kg, 5kg, 10kg',
  },
];

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'epices', name: 'Épices' },
  { id: 'fruits', name: 'Fruits' },
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [displayedProducts, setDisplayedProducts] = useState(6);
  
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || product.category === selectedCategory)
    );

  const productsToShow = filteredProducts.slice(0, displayedProducts);
  const hasMoreProducts = displayedProducts < filteredProducts.length;

  const loadMoreProducts = () => {
    setDisplayedProducts(prev => prev + 6);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3 text-slate-800">Catégories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full text-left p-3 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <Separator />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Produits d'exportation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Produits</span> Premium
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits locaux d’exception pour l’exportation internationale.
          </p>
        </motion.div>
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block w-72 shrink-0"
          >
            <div className="sticky top-28 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
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
              className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm"
            >
              <div className="flex flex-col gap-6">
                {/* Search and Mobile Filter Toggle */}
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      placeholder="Rechercher un produit..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-14 text-base rounded-xl"
                    />
                  </div>
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="lg:hidden w-14 h-14 rounded-xl">
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
                      className="w-14 h-14 rounded-xl"
                    >
                      <Grid className="h-5 w-5" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setViewMode('list')}
                      className="w-14 h-14 rounded-xl"
                    >
                      <List className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                {/* Results Count */}
                <div className="flex justify-between items-center">
                  <div className="text-slate-700">
                    <span className="font-medium">{filteredProducts.length}</span> produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}
                  </div>
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {categories.find(c => c.id === selectedCategory)?.name}
                    </Badge>
                  )}
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
                  className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all ${
                    viewMode === 'list' ? 'flex flex-row' : 'flex flex-col'
                  }`}
                >
                  <div className={`${viewMode === 'list' ? 'w-1/3 h-64' : 'w-full h-64'} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                      {product.categoryLabel}
                    </Badge>
                  </div>
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-medium text-slate-700 mb-2">Caractéristiques :</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                              <span className="text-slate-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-slate-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">Format: {product.format}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full pt-4 border-t border-slate-100">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          asChild
                          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 shadow-md"
                        >
                          <a href="/contact">
                            Nous contactez
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
                  className="px-8 py-6 rounded-xl text-base border-slate-300 bg-white hover:bg-slate-50"
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
            <p className="text-slate-600 max-w-md mx-auto mb-8">
              Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
              className="px-8 py-4 rounded-xl text-base border-slate-300 bg-white hover:bg-slate-50"
            >
              Réinitialiser les filtres
            </Button>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default ProductsPage;