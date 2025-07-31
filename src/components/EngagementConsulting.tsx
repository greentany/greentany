import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaWrench, 
  FaHeadset, 
  FaLock, 
  FaDollarSign 
} from 'react-icons/fa';

const EngagementConsulting = () => {
  const engagements = [
    {
      icon: FaShieldAlt,
      title: "Qualité du service",
      description: "Nous garantissons un haut niveau de qualité dans toutes nos prestations."
    },
    {
      icon: FaWrench,
      title: "Solution sur mesure",
      description: "Chaque client bénéficie d'une approche personnalisée et adaptée à ses besoins."
    },
    {
      icon: FaHeadset,
      title: "Assistance en continu",
      description: "Un accompagnement et un support tout au long de votre démarche."
    },
    {
      icon: FaLock,
      title: "Confidentialité",
      description: "Vos informations et projets sont traités avec la plus grande discrétion."
    },
    {
      icon: FaDollarSign,
      title: "Transparence dans les coûts",
      description: "Des tarifs clairs, compétitifs et sans surprise."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Nos Engagements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Engagement</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            GREENTANY Consulting a l'ambition de relever les défis et s'engage à offrir à ses clients dans un premier temps un diagnostic général de la performance et de la conformité, en fonction des résultats d'une action d'un spécialiste dans les domaines concernés et tout cela à un coût raisonnable et compétitif.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map((engagement, index) => (
            <motion.div
              key={engagement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 p-[2px] animate-gradient-shift"
            >
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                    <engagement.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{engagement.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {engagement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementConsulting; 