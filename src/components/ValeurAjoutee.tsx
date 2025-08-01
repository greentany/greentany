import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaGlobe, 
  FaChevronDown, 
  FaChevronUp,
  FaAward,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaLightbulb
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { mainServices } from '@/lib/servicesData';

// Map icon string to React component
const iconMap = {
  FaShieldAlt,
  FaGlobe,
  FaAward,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaLightbulb
};

const ValeurAjoutee: React.FC = () => {
  const [expandedConsulting, setExpandedConsulting] = useState<number | null>(null);
  const [expandedExport, setExpandedExport] = useState<number | null>(null);

  const toggleConsulting = (index: number) => {
    setExpandedConsulting(expandedConsulting === index ? null : index);
  };

  const toggleExport = (index: number) => {
    setExpandedExport(expandedExport === index ? null : index);
  };

  const exportFeatures = [
    {
      icon: FaGlobe,
      title: 'Épices Premium',
      description: 'Sélection rigoureuse des meilleures épices d\'Afrique de l\'Ouest, garantissant qualité et authenticité.'
    },
    {
      icon: FaAward,
      title: 'Certifications Internationales',
      description: 'Toutes nos épices répondent aux standards internationaux avec certifications HACCP, ISO et Bio.'
    },
    {
      icon: FaHandshake,
      title: 'Partenariats Durables',
      description: 'Collaboration directe avec les producteurs locaux pour un commerce équitable et durable.'
    },
    {
      icon: FaRocket,
      title: 'Logistique Optimisée',
      description: 'Chaîne logistique complète de la récolte à l\'exportation avec traçabilité totale.'
    }
  ];

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
            Notre Valeur Ajoutée
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez nos deux pôles d'expertise qui font de Greentany un partenaire de confiance
          </p>
        </motion.div>

        {/* Consulting Section - Image Left, Content Right */}
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
                        <h4 className="font-bold text-slate-800">Greentany Consulting</h4>
                        <p className="text-blue-600 text-sm">Expert en Conformité</p>
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
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Greentany Consulting</h3>
                <p className="text-blue-600 font-medium text-lg">Services de Conseil Expert</p>
              </div>

              {/* Collapsible Items */}
              <div className="space-y-4">
                {mainServices.map((service, index) => {
                  // If icon is a string, map to React component
                  const Icon = typeof service.icon === 'string' ? (iconMap[service.icon as keyof typeof iconMap] || FaShieldAlt) : service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                    >
                      <button
                        onClick={() => toggleConsulting(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200 rounded-2xl"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-bold text-slate-800 text-lg">{service.title}</h4>
                        </div>
                        <div className="text-blue-500">
                          {expandedConsulting === index ? (
                            <FaChevronUp className="h-5 w-5" />
                          ) : (
                            <FaChevronDown className="h-5 w-5" />
                          )}
                        </div>
                      </button>
                      {expandedConsulting === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <div className="space-y-4">
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                            <div>
                              <h5 className="font-semibold text-slate-800 mb-2">Nos services incluent :</h5>
                              <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                    <span className="text-slate-600 text-sm">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold">
                  <Link to="/greentany-consulting">Découvrir Consulting</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Export Section - Content Left, Image Right */}
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
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-2">Greentany Export</h3>
                <p className="text-emerald-600 font-medium text-lg">Exportation d'Épices Premium</p>
              </div>

              {/* Collapsible Items */}
              <div className="space-y-4">
                {exportFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                  >
                    <button
                      onClick={() => toggleExport(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200 rounded-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">{feature.title}</h4>
                      </div>
                      <div className="text-emerald-500">
                        {expandedExport === index ? (
                          <FaChevronUp className="h-5 w-5" />
                        ) : (
                          <FaChevronDown className="h-5 w-5" />
                        )}
                      </div>
                    </button>
                    {expandedExport === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold">
                  <Link to="/greentany-export">Découvrir Export</Link>
                </Button>
              </div>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="relative lg:order-2"
            >
              <div className="relative">
                <img
                  src="/african-office-2.jpg"
                  alt="Greentany Export - Exportation d'Épices"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <FaGlobe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Greentany Export</h4>
                        <p className="text-emerald-600 text-sm">Épices Premium</p>
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

export default ValeurAjoutee; 