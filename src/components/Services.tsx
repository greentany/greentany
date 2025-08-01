import { motion } from 'framer-motion';
import { BookOpen, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="py-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images1.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-900/40 to-slate-900/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span className="text-sm font-medium text-white">Nos Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Services</span> Spécialisés
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Greentany propose deux services complémentaires pour répondre aux besoins de nos clients
            </p>
        </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consulting Service */}
        <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Greentany Consulting</h3>
                  <p className="text-blue-300 font-medium">Services de Conseil</p>
                </div>
              </div>
              <p className="text-slate-200 mb-6 leading-relaxed">
                Experts en sécurité alimentaire et normes sociales. Plus de 200 missions réalisées avec succès depuis 2008. 
                Nous accompagnons les entreprises dans leur démarche d'excellence en matière de qualité et conformité.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200">HACCP et sécurité alimentaire</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200">Certification ISO 9001:2015</span>
                  </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200">Audits SMETA et Global GAP</span>
                </div>
              </div>
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white group-hover:shadow-lg transition-all duration-300">
                <Link to="/greentany-consulting">
                  Découvrir Consulting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              </motion.div>

            {/* Export Service */}
              <motion.div 
              initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div>
                  <h3 className="text-2xl font-bold text-white">Greentany Export</h3>
                  <p className="text-emerald-300 font-medium">Exportation d'Épices</p>
                </div>
              </div>
              <p className="text-slate-200 mb-6 leading-relaxed">
                Producteur et grossiste d'épices et ingrédients biologiques et conventionnels d'origine Madagascar. 
                Exportation dans le monde entier depuis 2016 avec plus de 1000 paysans partenaires.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200">Épices d'origine Madagascar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200">Produits bio et conventionnels</span>
                    </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200">Exportation mondiale</span>
                      </div>
                    </div>
              <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white group-hover:shadow-lg transition-all duration-300">
                <Link to="/greentany-export">
                  Découvrir Export
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;