import { motion, Variants } from 'framer-motion';
import { ScrollVelocity } from '@/components/ui/scroll-velocity';

const References = () => {
  const clients = [
    { name: 'Toyota', image: '/Image1.png' },
    { name: 'GETCO', image: '/Image2.png' },
    { name: 'R.EX.P', image: '/Image3.png' },
    { name: 'Mon Litchi', image: '/Image4.png' },
    { name: 'LITE', image: '/Image5.png' },
    { name: 'SCIM Madagascar', image: '/Image6.png' },
    { name: 'EXA Trading', image: '/Image7.png' },
    { name: 'CFM', image: '/Image8.png' },
    { name: 'MALGAPRO', image: '/Image9.png' },
    { name: 'GROUPE SODIAT', image: '/Image10.png' },
    { name: 'SAMEHAVAH SARL', image: '/Image11.png' },
    { name: 'GASY FRUITS', image: '/Image12.png' },
    { name: 'SKCC', image: '/Image13.png' },
    { name: 'SAHANALA', image: '/Image14.png' },
    { name: 'MCO TRADE', image: '/Image15.png' },
    { name: 'AMBATOVY', image: '/Image16.png' }
  ];

  // Animation variants pour les éléments
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: 'easeInOut',
        duration: 1.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  const velocity = [3, -3]

  return (
    <section id="references" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header avec animations améliorées */}
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
            <span className="text-sm font-semibold text-blue-700">Clients satisfaits</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Ils nous font{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800">
              confiance
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Plus de 200 missions réalisées pour des entreprises leaders dans leurs secteurs
          </motion.p>
        </motion.div>

        {/* Scroll Velocity Carousel - Version complète */}
        <div className="w-full">
          <div className="flex flex-col space-y-5 py-10">
            {velocity.map((v, index) => (
              <ScrollVelocity key={index} velocity={v}>
                {clients.map(({ name, image }) => (
                  <div
                    key={name}
                    className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem] mx-4"
                  >
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-contain object-center rounded-lg shadow-lg bg-white p-2"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                      <p className="text-white text-sm font-medium truncate">{name}</p>
                    </div>
                  </div>
                ))}
              </ScrollVelocity>
            ))}
            <ScrollVelocity velocity={7} className="text-slate-700">
              Ils nous font confiance
            </ScrollVelocity>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default References;