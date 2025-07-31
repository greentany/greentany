import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaLeaf, 
  FaHeart, 
  FaGlobe, 
  FaUsers, 
  FaGraduationCap 
} from 'react-icons/fa';

const AboutConsulting = () => {
  const expertiseAreas = [
    {
      icon: FaShieldAlt,
      title: "Qualité",
      description: "Systèmes de management de la qualité"
    },
    {
      icon: FaLeaf,
      title: "Environnement",
      description: "Gestion environnementale et développement durable"
    },
    {
      icon: FaHeart,
      title: "Santé & Sécurité",
      description: "Protection de la santé et sécurité au travail"
    },
    {
      icon: FaGlobe,
      title: "RSE",
      description: "Responsabilité sociétale des entreprises"
    },
    {
      icon: FaUsers,
      title: "Accompagnement",
      description: "Conseil et assistance technique personnalisée"
    },
    {
      icon: FaGraduationCap,
      title: "Formation",
      description: "Formation QHSE sur mesure"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
      {/* Neumorphic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-white/50"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-slate-600 to-slate-700"></div>
            <span className="text-sm font-semibold text-slate-700">Depuis 2008</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-8"
          >
            À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700">Greentany Consulting</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Créer depuis 2008, GREENTANY Consulting est un cabinet de conseil spécialisé dans le domaine:
          </motion.p>
           {/* Neumorphic expertise cards */}
        <div className="grid py-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-white/50 hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.15)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full  transition-all duration-300">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{area.title}</h3>
                    <p className="text-slate-600 text-sm">{area.description}</p>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Nous proposons aux organisations de toute taille et de tout secteur, du conseil, de l'accompagnement, de l'assistance technique, de l'audit et de la formation QHSE afin de les aider à se construire sur le long terme, et se projeter dans un avenir jalonné de succès.
          </motion.p>
        </motion.div>

       

        {/* Neumorphic stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-white/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">15+</div>
                <div className="text-slate-600 font-medium">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">200+</div>
                <div className="text-slate-600 font-medium">Missions réalisées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">50+</div>
                <div className="text-slate-600 font-medium">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">100%</div>
                <div className="text-slate-600 font-medium">Accompagnement</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutConsulting; 