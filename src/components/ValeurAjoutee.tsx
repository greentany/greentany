import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaGlobe, 
  FaUsers, 
  FaChartLine, 
  FaAward, 
  FaHandshake,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ValeurAjoutee = () => {
  const consultingFeatures = [
    {
      icon: FaShieldAlt,
      title: "Maîtrise des référentiels QHSE",
      description: "ISO 9001, ISO 45001, ISO 14001, SA8000, ISO 26000, BSCI, SMETA, HACCP… pour une approche pratique et efficace."
    },
    {
      icon: FaAward,
      title: "Expertise métiers spécifiques",
      description: "ISO 22716 (cosmétique), ISO 18295 (centres de relation clients), ISO 20252 (enquêtes), GOTS (textile bio), Human For Client (RSE call centers), ISO 27001 (sécurité informatique), FSSC 22000 (sécurité alimentaire)…"
    },
    {
      icon: FaUsers,
      title: "Excellence en audit",
      description: "Missions réalisées dans les conditions des audits de certification ISO. Consultants certifiés IRCA et auditeurs pour des organismes de certification."
    },
    {
      icon: FaGlobe,
      title: "Interventions multisectorielles",
      description: "Industrie, BTP, textile, BPO, banques-assurances, agroalimentaire, laboratoires, services… à Madagascar et dans l'Océan Indien."
    },
    {
      icon: FaChartLine,
      title: "Expérience avec les bailleurs internationaux",
      description: "Suivi-évaluation efficace des projets sociaux à Madagascar."
    },
    {
      icon: FaHandshake,
      title: "Formation professionnelle reconnue",
      description: "Plus de 1 500 stagiaires formés, avec des outils et techniques adaptés pour des sessions efficaces."
    }
  ];

  const exportFeatures = [
    {
      icon: FaRocket,
      title: "Nos forces",
      description: "Nous combinons tradition et innovation pour offrir des produits à la hauteur des attentes de nos clients."
    },
    {
      icon: FaLightbulb,
      title: "Expertise sectorielle",
      description: "Connaissance approfondie des produits tropicaux et de leurs marchés."
    },
    {
      icon: FaUsers,
      title: "Réseau solide",
      description: "Partenariats stratégiques avec des producteurs locaux et des acteurs logistiques fiables."
    },
    {
      icon: FaGlobe,
      title: "Capacité d'adaptation",
      description: "Réponse agile aux exigences spécifiques des marchés internationaux."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Material Design Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Material Design Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full mb-6 shadow-lg"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-600"></div>
            <span className="text-sm font-semibold text-slate-700">Valeur Ajoutée</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Greentany</span> ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Notre double expertise en <span className="font-semibold text-blue-700">Consulting</span> et <span className="font-semibold text-emerald-700">Export</span> vous garantit un accompagnement sur-mesure, adapté à vos enjeux et à votre secteur.
          </motion.p>
        </motion.div>

        {/* Material Design Cards Layout */}
        <div className="relative">
          {/* Consulting Section - Material Design Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-8">
                {/* Material Design Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <FaShieldAlt className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800">Greentany Consulting</h3>
                    <p className="text-blue-600 font-medium text-lg">Services de Conseil Expert</p>
                  </div>
                </div>
                
                {/* Material Design Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {consultingFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200/50">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 mb-2 text-lg">{feature.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Material Design CTA */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold">
                    <Link to="/greentany-consulting">Découvrir Consulting</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Export Section - Material Design Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative lg:ml-auto lg:w-4/5"
          >
            <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="p-8">
                {/* Material Design Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <FaGlobe className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800">Greentany Export</h3>
                    <p className="text-emerald-600 font-medium text-lg">Exportation d'Épices Premium</p>
                  </div>
                </div>
                
                {/* Material Design List */}
                <div className="space-y-6">
                  {exportFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-200/50">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 mb-2 text-lg">{feature.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Material Design CTA */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold">
                    <Link to="/greentany-export">Découvrir Export</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValeurAjoutee; 