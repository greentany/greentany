import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

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
    name: 'CURCUMA FRAIS',
    englishName: 'Fresh Turmeric',
    botanicalName: 'Curcuma longa',
    image: '/CURCUMAFRAIS.png',
    description: 'Curcuma frais, arôme puissant',
    category: 'epices',
    categoryLabel: 'Épices et Ingrédients'
  },
  {
    id: 18,
    name: 'CURCUMA EN LAMELLE',
    englishName: 'Turmeric sliced',
    botanicalName: 'Curcuma longa',
    image: '/CURCUMALAMMELLE.png',
    description: 'Curcuma en lamelles, arôme puissant',
    category: 'epices',
    categoryLabel: 'Épices et Ingrédients'
  },
  {
    id: 7,
    name: 'GINGEMBRE FRAIS',
    englishName: 'Fresh Ginger',
    botanicalName: 'Zingiber officinale',
    image: '/image32.jpg',
    description: 'Gingembre frais ou séché, arôme puissant',
    category: 'epices',
    categoryLabel: 'Épices et Ingrédients'
  },
  {
    id: 17,
    name: 'GINGEMBRE  EN LAMELLE',
    englishName: 'Ginger sliced',
    botanicalName: 'Zingiber officinale',
    image: '/GINGEMBRELAMMELLE.png',
    description: 'Gingembre en lamelles, arôme puissant',
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
    image: '/litchi.png',
    description: 'Litchis frais, variété export, récoltés à maturité',
    category: 'fruits',
    categoryLabel: 'Fruits et Grains Secs'
  },
  {
    id: 16,
    name: 'RAMBOUTAN',
    englishName: 'Rambutan',
    botanicalName: 'Nephelium lappaceum',
    image: '/RAMBOUTAN.png',
    description: 'Ramboutans frais, variété export, récoltés à maturité',
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
    image: '/image34.png',
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

const categoryOptions = [
  { label: 'Tous nos produits', value: 'all' },
  { label: 'Nos épices et ingrédients', value: 'epices' },
  { label: 'Nos fruits tropicaux', value: 'fruits' },
  { label: 'Nos grains secs', value: 'grains' },
];

const ProductsPage = () => {
  const containerRef = useGSAPAnimations();
  const [category, setCategory] = useState('all');
  // Filtrage dynamique
  const filteredProducts = products.filter((p) => {
    if (category === 'all') return true;
    if (category === 'grains') {
      // Grains secs = produits dont le nom ou la catégorie contient "haricot", "pois", "beans", "grains"
      return (
        /haricot|pois|bean|grain/i.test(p.name) || /haricot|pois|bean|grain/i.test(p.englishName) || /grains/i.test(p.categoryLabel)
      );
    }
    if (category === 'fruits') {
      // Fruits tropicaux = catégorie fruits
      return p.category === 'fruits';
    }
    // Épices et ingrédients = catégorie epices
    return p.category === 'epices';
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <main>
        {/* Hero: image bg + titre centré */}
        <section className="relative min-h-screen flex items-center overflow-hidden section-gsap">
          <div className="absolute inset-0">
            <img src="/produit.png" alt="Hero produits" className="w-full h-full object-cover" />

          </div>
          {/* Logo en haut à gauche - toujours visible */}
      <div className="absolute top-8 mt-24 left-16 z-45">
        <img
          src="/logo1.png"
          alt="Greentany Logo"
          className="h-20 w-auto md:h-24 lg:h-28 drop-shadow-lg"
        />
      </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
            >
              Nos produits
            </motion.h1>
          </div>
        </section>

        {/* CTA: texte centré + bouton orange */}
        <section className="container mx-auto px-4 py-12 md:py-16 text-center section-gsap">
          <p className="text-3xl md:text-xl font-semibold text-slate-800 max-w-4xl mx-auto">
            Producteur et grossiste d’Epices et Ingrédients - Grains secs et Fruits tropicaux, d’origine Madagascar
          </p>
          <div className="mt-6">
            <Link to="/contact">
              <Button className="px-8 py-4 bg-[#FF6600] text-white rounded-xl font-bold shadow hover:brightness-110">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </section>

        {/* Filtres produits */}
        <section className="container mx-auto px-4 py-4 flex flex-wrap gap-4 justify-center items-center">
          {categoryOptions.map((opt) => (
            <Button
              key={opt.value}
              variant={category === opt.value ? 'hero' : 'outline'}
              onClick={() => setCategory(opt.value)}
              className="min-w-[180px]"
            >
              {opt.label}
            </Button>
          ))}
        </section>

        {/* About: deux blocs alternés */}
        <section className="container mx-auto px-4 py-12 md:py-16 space-y-16 section-gsap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Qui sommes-nous ?              </h3>
              <p className="text-slate-600">
              Notre société́ <span className='font-bold text-[#ff6600]'>GREENTANY EXPORT</span> est présent  à Madagascar depuis 2016. Les principales activités de la société sont l'agroalimentaire, l'industrie et les services.
                </p>
                <p className="text-slate-600">
              La société́ <span className='font-bold text-[#ff6600]'>GREENTANY EXPORT</span> est spécialisé dans l'exportation dans le Monde entier depuis Madagascar, de fruits frais (litchi, banane, ..) épices et ingrédients (poivre noir, vanille, clou de girofle, cannelle, curcuma, bais rose, gingembre, etc.) grains secs (haricot rouge sec, pois du cap sec, black eyes, …)
                </p>
                <p className="text-slate-600">
                La société est l'un des leaders impliqués dans les processus commerciaux de qualité et éthiques, et se positionne comme une entreprise exemplaire dans le secteur agro-alimentaire.
                </p>
            </div>
            <div>
              <img src="/product1.png" alt="Traçabilité" className="w-full h-[360px] object-cover rounded-3xl shadow-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <img src="/product2.jpg" alt="Qualité" className="w-full h-[360px] object-cover rounded-3xl shadow-xl" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900"><span className='font-bold text-[#ff6600]'>GREENTANY EXPORT </span>: une relation étroite et pérenne avec les paysans              </h3>
              <p className="text-slate-600">
              Nous développons un réseau de plusieurs milliers de paysans-partenaires, grâce à la mise en place de groupements et coopératives autonomes.
                </p>
              <p className="text-slate-600">
              Les payetsans malgaches affiliés à nos projets produisent des Epices Ingrédients – des grains secs et fruits tropicaux de qualité́.
                </p>
              <p className="text-slate-600">
            Ils sont accompagnés, pas à pas, par nos agents de terrain, pour les Bonnes Pratiques Agricoles, les Bonnes Pratiques d’Hygiène, les Itinéraires Techniques et la Gestion.
            </p>
            </div>
            
          </div>
        </section>

        {/* Banner section */}
        <section className="relative py-16 md:py-24 overflow-hidden section-gsap">
          <div className="absolute inset-0">
            <img src="/product3.png" alt="Bannière produits" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Découvrez notre sélection de produits locaux d'exception pour l'exportation internationale
            </h3>
          </div>
        </section>

        {/* Product grid */}
        <section className="container mx-auto px-4 py-12 md:py-16 section-gsap">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Une production de qualité d'épices et ingrédients, de grains secs et de fruits tropicaux d'origine Madagascar
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="w-full h-48 flex items-center justify-center bg-gray-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-slate-900">{product.name}</h4>
                  <p className="text-emerald-600 font-medium">{product.englishName}</p>
                  <p className="text-slate-500 text-sm italic">{product.botanicalName}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA final: image bg + texte + bouton orange */}
        <section className="relative py-20 md:py-28 overflow-hidden section-gsap">
          <div className="absolute inset-0">
            <img src="/product4.png" alt="CTA produits" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vous recherchez un producteur d’épices et ingrédients – de Grains sec et Fruits tropicaux de Madagascar ? 
            </h3>
            <p className="text-white mb-8 font-semibold">
            Vous souhaitez des informations ou un devis ?
            </p>
            <Link to="/contact">
              <Button className="px-8 py-4 bg-[#FF6600] text-white rounded-xl font-bold shadow hover:brightness-110">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;