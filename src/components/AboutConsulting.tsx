import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaChartLine, FaAward } from 'react-icons/fa';
import References from './References';

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            À Propos de Greentany Consulting
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour la conformité et la qualité
          </p>
        </motion.div>

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
                  src="/african-office.jpg"
                  alt="Greentany Consulting - Services de Conseil"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                        <FaShieldAlt className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Expert en Conformité</h4>
                        <p className="text-blue-600 text-sm">Depuis 2008</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                  Notre Mission
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nous proposons aux organisations de toute taille et de tout secteur, du conseil, de l'accompagnement, de l'assistance technique, de l'audit et de la formation QHSE afin de les aider à se construire sur le long terme, et se projeter dans un avenir jalonné de succès.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaUsers className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Accompagnement Personnalisé</h4>
                    <p className="text-slate-600 text-sm">Solutions sur mesure adaptées à vos besoins spécifiques</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Expertise Sectorielle</h4>
                    <p className="text-slate-600 text-sm">Connaissance approfondie de multiples secteurs d'activité</p>
                  </div>
                </div>
                <button
                    onClick={scrollToReferences}
                    className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:from-emerald-600 hover:to-emerald-700 transition-colors duration-200"
                  >
                    Découvrir nos clients
                  </button>
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
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Notre Expérience
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Avec plus de 200+ clients accompagnés, Qualinove est un partenaire reconnu dans des secteurs variés : industrie, santé, médico-social, énergie, environnement, collectivités, agroalimentaire, bâtiment, transport, services, banque, assurance, IT, éducation,… Nous intervenons auprès de TPE, PME, ETI et grands comptes, en personnalisant chaque mission pour répondre aux réalités et enjeux spécifiques de nos clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <FaAward className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">200+ Clients</h4>
                    <p className="text-slate-600 text-sm">Une expertise reconnue auprès de nombreux secteurs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <FaShieldAlt className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">Multi-Sectoriel</h4>
                    <p className="text-slate-600 text-sm">Intervention dans tous types d'organisations</p>
                  </div>
                </div>
                <button
                    onClick={scrollToReferences}
                    className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:from-emerald-600 hover:to-emerald-700 transition-colors duration-200"
                  >
                    Découvrir nos clients
                  </button>
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
                  src="/african-office-2.jpg"
                  alt="Greentany Consulting - Expertise Multi-Sectorielle"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <FaAward className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">200+ Clients</h4>
                        <p className="text-emerald-600 text-sm">Expertise Reconnue</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
              </div>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutConsulting; 