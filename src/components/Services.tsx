import { motion } from 'framer-motion';
import { BookOpen, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
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
            <span className="text-sm font-medium text-blue-700">Nos Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Services</span> Spécialisés
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Greentany Consulting</h3>
                <p className="text-blue-600 font-medium">Services de Conseil</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Experts en sécurité alimentaire et normes sociales. Plus de 200 missions réalisées avec succès depuis 2008. 
              Nous accompagnons les entreprises dans leur démarche d'excellence en matière de qualité et conformité.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700">HACCP et sécurité alimentaire</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700">Certification ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700">Audits SMETA et Global GAP</span>
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
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Greentany Export</h3>
                <p className="text-emerald-600 font-medium">Exportation d'Épices</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Producteur et grossiste d'épices et ingrédients biologiques et conventionnels d'origine Madagascar. 
              Exportation dans le monde entier depuis 2016 avec plus de 1000 paysans partenaires.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">Épices d'origine Madagascar</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">Produits bio et conventionnels</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">Exportation mondiale</span>
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
      </div>
    </section>
  );
};

export default Services;