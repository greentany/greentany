import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaChartLine, FaAward } from 'react-icons/fa';
import References from './References';
import { Link } from 'react-router-dom';

const AboutConsulting: React.FC = () => {
  const scrollToReferences = () => {
    const element = document.getElementById('references-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center"
          >
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800">
           Producteur et grossiste d’Epices et Ingrédients - Grain sec et Fruits tropicaux, d’origine Madagascar
</span>
          </motion.h2>

        {/* First Section - Image Left, Content Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/product1.png"
                  alt="Greentany Consulting - Services de Conseil"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Qui sommes-nous?
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Notre société́ <span className='font-bold text-[#FF9900]'>GREENTANY EXPORT</span> est présent  à Madagascar depuis 2016. Les principales activités de la société sont l'agroalimentaire, l'industrie et les services.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  La société  <span className='font-bold text-[#FF9900]'>GREENTANY EXPORT</span> est spécialisé dans l'exportation dans le Monde entier depuis Madagascar, de fruits frais (litchi, banane, ..) épices et ingrédients (poivre noir, vanille, clou de girofle, cannelle, curcuma, bais rose, gingembre, etc.) grains secs (haricot rouge sec, pois du cap sec, black eyes, …)
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  La société est l'un des leaders impliqués dans les processus commerciaux de qualité et éthiques, et se positionne comme une entreprise exemplaire dans le secteur agro-alimentaire.
                </p>
                
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                              className="pt-4"
                            >
                              <Link to="/contact">
                              <button className="w-full py-4 bg-[#FF6600] text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all">
                                Contactez-nous
                              </button>
                              </Link>
                  </motion.div>
              </div>
            </motion.div>
            
          </div>
        </motion.div>

        {/* Second Section - Content Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="space-y-6 lg:order-1"
            >
              <div>
                <h3 className="text-3xl text-slate-800 mb-4">
                  <span className='font-bold'>GREENTANY EXPORT :</span>une relation étroite et pérenne avec les paysans
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nous développons un réseau de plusieurs milliers de paysans-partenaires, grâce à la mise en place de groupements et coopératives autonomes.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Les paysans malgaches affiliés à nos projets produisent des Epices et Ingrédients – des grains secs et fruits tropicaux de qualité́.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Ils sont accompagnés, pas à pas, par nos agents de terrain, pour les Bonnes Pratiques Agricoles, les Bonnes Pratiques d’Hygiène, les Itinéraires Techniques et la Gestion.
                </p>

              </div>
              
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative lg:order-2"
            >
              <div className="relative">
                <img
                  src="/product2.jpg"
                  alt="Greentany Consulting - Expertise Multi-Sectorielle"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                
              </div>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutConsulting; 