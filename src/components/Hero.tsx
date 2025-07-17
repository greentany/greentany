import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronDown, ShieldCheck, BookOpen, BarChart2, Users, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BookOpen className="h-6 w-6 text-teal-500" />
      </motion.div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col h-full justify-center"
          >
            <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Depuis 2008 - Expertise confirmée</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Conformité</span> et{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Qualité</span> au service de votre entreprise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Consultants experts en sécurité alimentaire et normes sociales. Plus de 200 missions réalisées avec succès depuis 2008.
            </motion.p>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">200+</p>
                  <p className="text-slate-600">Missions réalisées</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">98%</p>
                  <p className="text-slate-600">Clients satisfaits</p>
                </div>
              </div>
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Button 
                variant="default" 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg shadow-blue-500/20"
              >
                <Link to="/services">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-300 bg-white hover:bg-slate-50"
              >
                <Link to="/contact">
                <ClipboardCheck className="mr-2 h-5 w-5 text-blue-600" />
                Demander un audit
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-full flex items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full flex items-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                alt="Qualité et conformité" 
                className="w-full h-full object-cover rounded-2xl min-h-[350px] max-h-[600px]"
                style={{ aspectRatio: '1/1', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;