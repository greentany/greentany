import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <section id="expertise" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 px-6 py-3 rounded-full mb-6 shadow-lg"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">À propos de nous</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800">Expert en management QHSE et RSE depuis 2008
</span>
          </motion.h2>
          
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 ">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700">Qui sommes-nous?</span>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Fondé en 2016, <span className='font-bold text-[#FF9900] '>GREENTANY CONSULTING</span> est un cabinet de conseil spécialisé dans le management de la qualité,
                 santé sécurité au travail, environnement, 
                 ainsi que dans la responsabilité sociétale des entreprises 
                 (RSE).

              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                 Forts de plus de 17 ans d’expérience, nous accompagnons tout type d’organisations – entreprises, collectivités, 
                 établissements de santé, industries – dans la mise en place 
                 et l’optimisation des systèmes de management selon tout référentiel lié 
                 à la performance durable des organisations.
              </p>
               {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Link to="/contact">
              <button className="flex align-center justify-center items-center p-4 bg-[#FF6600] text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all">
                Demande dévis gratuit
              </button>
              </Link>
            </motion.div>
            </div>
          </motion.div>
          {/* Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Professional Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10"></div>
              <img 
                src="/consulting1.jpg" 
                alt="Expert QHSE" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
           
          </motion.div>
        </div>
      </div>

      {/* Section Cabinet - Solutions sur mesure */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/cabinet4.jpg"
                alt="Cabinet Greentany"
                className="w-full h-[360px] object-cover rounded-3xl shadow-xl"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Des solutions sur mesure pour structurer et dynamiser vos démarches QSE et RSE
              </h3>
              <p className="text-slate-600 leading-relaxed">
              Spécialistes des référentiels reconnus – <span className='text-[#FF6600] font-bold'>GLOBALGAP, GRASP, HACCP, Agriculture Biologique, FLO Fair-Trade TRADER & SPO, RAINFOREST ALLIANCE, SMETA …</span> – nous vous accompagnons dans la mise en place, l’optimisation et l’amélioration continue de votre système de management QHSE et RSE.
              </p>
              <p className="text-slate-600 leading-relaxed">
              Notre approche vise à garantir la conformité normative et réglementaire, sécuriser vos certifications, renforcer la satisfaction client et faire évoluer vos démarches vers plus de performance. Nous vous aidons à structurer des Systèmes de Management à forte valeur ajoutée.
              </p>
              <Link to="/contact">
                <button className="mt-4 px-6 md:px-8 py-3 md:py-4 bg-[#FF6600] text-white rounded-xl font-bold shadow-lg hover:brightness-110 transition">
                  Demander un devis
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;