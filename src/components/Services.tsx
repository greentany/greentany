import { motion } from 'framer-motion';
import { Shield, BookOpen, Users, Search, Award, Cog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mainServices, certifications } from '@/lib/servicesData';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Services professionnels</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">spécialisées</span> pour votre entreprise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une gamme complète de services de conseil en qualité, sécurité alimentaire et conformité sociale
          </p>
        </motion.div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Service Image */}
              <motion.div 
                className="w-full md:w-2/5 rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {service.title}
                  </div>
                </div>
              </motion.div>
              {/* Service Content */}
              <div className="w-full md:w-3/5">
                <Card className="border-0 shadow-none">
                  <CardHeader className="flex flex-row items-start gap-4 pb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-800 mb-2">{service.title}</CardTitle>
                      <p className="text-slate-600">{service.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-slate-800">Domaines d'intervention :</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                            <span className="text-slate-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-4"
                      >
                        <button className="inline-flex items-center gap-2 text-blue-600 font-medium group">
                          <span>En savoir plus</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;