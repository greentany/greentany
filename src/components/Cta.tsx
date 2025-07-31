import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CtaProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const Cta = ({
  title = "Prêt à transformer votre entreprise ?",
  description = "Contactez-nous dès aujourd'hui pour un diagnostic gratuit et une proposition personnalisée",
  primaryButtonText = "Nous contacter",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Découvrir nos services",
  secondaryButtonLink = "/services",
  className = ""
}: CtaProps) => {
  return (
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900 to-teal-900 p-12 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-700/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-700/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {title}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  asChild
                  variant="default" 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/20"
                >
                  <Link to={primaryButtonLink}>{primaryButtonText}</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta; 