import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Nos services', href: '/services' },
    { label: 'Nos produits', href: '/produits' },
    { label: 'À propos', href: '/apropos' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/lovable-uploads/5b1489c2-9ed5-4262-939a-2c0f47c3c36e.png" 
              alt="Greentany Consulting" 
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+261342844951" className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+261 34 28 449 51</span>          
              </a>

            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors px-4 py-2 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="h-4 w-4" />
                  <span>+261 34 28 449 51</span>
                </div>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;