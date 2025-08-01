import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaGlobe, 
  FaUsers, 
  FaChartLine, 
  FaAward, 
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
}

interface Feature73Props {
  features?: Feature[];
}

export const Feature73 = ({
  features = [],
}: Feature73Props) => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
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
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Services</span> de conseil
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des solutions sur mesure pour structurer et dynamiser vos entreprises
            </p>
          </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {features[0] && (
            <div className="md:col-span-2">
              <div className="relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-md shadow-lg">
                <div className="bg-white rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-blue-100">
                        <img
                          src={features[0].image}
                          alt={features[0].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                          <FaShieldAlt className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                          {features[0].title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {features[0].description}
                        </p>
                      </div>
                      {features[0].features && features[0].features.length > 0 && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                            <FaCheckCircle className="h-5 w-5 text-emerald-500" />
                            Fonctionnalités
                          </h4>
                          <div className="grid gap-3">
                            {features[0].features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 mt-2 flex-shrink-0"></div>
                                <span className="text-slate-700 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {features.slice(1).map((feature, index) => {
            const icons = [FaGlobe, FaUsers, FaChartLine, FaAward, FaHandshake, FaLightbulb, FaRocket];
            const IconComponent = icons[index % icons.length];
            
            return (
              <div key={feature.id} className="relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-md shadow-lg">
                <div className="bg-white rounded-2xl p-6 h-full">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-blue-100">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-3 left-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-800">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {feature.features && feature.features.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <FaCheckCircle className="h-4 w-4 text-emerald-500" />
                            Fonctionnalités
                          </h4>
                          <div className="space-y-2">
                            {feature.features.map((featureItem, idx) => (
                              <div key={idx} className="flex items-start gap-2 p-2 rounded-md bg-gradient-to-r from-emerald-50 to-blue-50">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 mt-1.5 flex-shrink-0"></div>
                                <span className="text-sm text-slate-700">{featureItem}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 