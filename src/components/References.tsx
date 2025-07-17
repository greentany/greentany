import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import Partners from './Partners';

const References = () => {
  const clients = [
    { 
      name: 'Toyota', 
      category: 'Automobile',
      testimonial: "Leur expertise en conformité nous a permis d'améliorer nos processus de qualité de manière significative.",
      image: '/path/to/toyota-logo.png' 
    },
    { 
      name: 'LITE', 
      category: 'Télécommunications',
      testimonial: "Un accompagnement exceptionnel dans la mise en place de notre système de gestion qualité.",
      image: '/path/to/lite-logo.png' 
    },
    { 
      name: 'SCIM Madagascar', 
      category: 'Industrie',
      testimonial: "Grâce à GREENTANY, nous avons obtenu la certification ISO 9001 dans un temps record.",
      image: '/path/to/scim-logo.png' 
    },
    { 
      name: 'EXA Trading', 
      category: 'Commerce',
      testimonial: "Leur approche sur mesure a transformé notre gestion de la sécurité alimentaire.",
      image: '/path/to/exa-logo.png' 
    },
    { 
      name: 'CFM', 
      category: 'Finance',
      testimonial: "Un partenaire fiable pour nos audits qualité et conformité réglementaire.",
      image: '/path/to/cfm-logo.png' 
    },
    { 
      name: 'MALGAPRO', 
      category: 'Agriculture',
      testimonial: "Leur expertise nous a aidé à obtenir la certification Global G.A.P. pour nos produits.",
      image: '/path/to/malcapro-logo.png' 
    },
    { 
      name: 'Groupe Sodiat', 
      category: 'Agroalimentaire',
      testimonial: "Un accompagnement professionnel qui a boosté notre conformité et notre productivité.",
      image: '/path/to/sodiat-logo.png' 
    },
    { 
      name: 'Gasyfruits', 
      category: 'Fruits & Légumes',
      testimonial: "Leur formation HACCP a été déterminante pour notre certification internationale.",
      image: '/path/to/gasyfruits-logo.png' 
    },
    { 
      name: 'SKCC', 
      category: 'Fruits & Légumes',
      image: '/path/to/SKCC.png' 
    },
    { 
      name: 'Mon litchi', 
      category: 'Fruits & Légumes',
      image: '/path/to/Monlitchi.png' 
    },
    { 
      name: 'Ambatovy', 
      category: 'industrie',
      image: '/path/to/ambatovy.png' 
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="references" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Clients satisfaits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Ils nous font <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">confiance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            "Plus de 200 missions réalisées pour des entreprises leaders dans leurs secteurs"
          </p>
        </motion.div>
        {/* Clients Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card className="h-full rounded-2xl overflow-hidden border border-slate-100 bg-white">
                {/* Client Logo */}
                <div className="relative h-40 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10"></div>
                  <div className="w-24 h-24 rounded-full bg-white p-4 shadow-md flex items-center justify-center z-20">
                    {client.image ? (
                      <img 
                        src={client.image} 
                        alt={client.name} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-blue-600">
                      {client.name.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="font-bold text-xl text-slate-800 mb-1">{client.name}</h3>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-4">
                      {client.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
                <p className="text-blue-100 font-medium">Missions réalisées</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                <p className="text-blue-100 font-medium">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                <p className="text-blue-100 font-medium">Secteurs d'activité</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Partners/>
    </section>
  );
};

export default References;