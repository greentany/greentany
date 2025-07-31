import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', href: '/' },
    { 
      label: 'Nos services', 
      href: '/services',
      dropdown: [
        { 
          label: 'Greentany Consulting', 
          href: '/greentany-consulting',
          description: 'Services de conseil en qualité et sécurité alimentaire',
          icon: '🏢'
        },
        { 
          label: 'Greentany Export', 
          href: '/greentany-export',
          description: 'Exportation d\'épices et ingrédients d\'origine Madagascar',
          icon: '🌿'
        }
      ]
    },
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
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
          >
            <Link to="/">
            <img 
                src="/logo.jpg" 
              alt="Greentany Consulting" 
                className="h-12 w-auto transition-all duration-300 hover:brightness-110"
            />
            </Link>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -2 }}
                className="relative"
              >
                {item.dropdown ? (
                  <DropdownMenu onOpenChange={(open) => setActiveDropdown(open ? item.label : null)}>
                    <DropdownMenuTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="ghost"
                          className={`text-foreground hover:text-primary transition-all duration-300 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100/50 ${
                            location.pathname === item.href || 
                            item.dropdown.some(drop => location.pathname === drop.href) 
                              ? 'text-primary bg-primary/10' 
                              : ''
                          }`}
                        >
                          {item.label}
                          <motion.div
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="w-80 p-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl"
                      sideOffset={8}
                    >
                      <div className="grid gap-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <motion.div
                            key={dropdownItem.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <DropdownMenuItem asChild className="p-0">
                              <Link
                                to={dropdownItem.href}
                                className={`w-full p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 group ${
                                  location.pathname === dropdownItem.href 
                                    ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border border-emerald-200' 
                                    : 'hover:text-emerald-700'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
                                    {dropdownItem.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                                      {dropdownItem.label}
                                    </div>
                                    <div className="text-sm text-slate-500 mt-1 group-hover:text-slate-600 transition-colors duration-300">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                  <motion.div
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" />
                                  </motion.div>
                                </div>
                              </Link>
                            </DropdownMenuItem>
                          </motion.div>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.href}
                      className={`text-foreground hover:text-primary transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-100/50 ${
                        location.pathname === item.href ? 'text-primary bg-primary/10' : ''
                  }`}
                >
                  {item.label}
                </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a 
              href="tel:+261342844951" 
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-slate-100/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4" />
              <span>+261 34 28 449 51</span>          
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="hero" size="sm" asChild className="shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/contact">Nous contacter</Link>
            </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Button
            variant="ghost"
            size="icon"
              className="md:hidden rounded-lg hover:bg-slate-100/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
          </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t bg-background/95 backdrop-blur-md"
            >
              <nav className="flex flex-col space-y-2 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <div className="px-4">
                        <motion.div 
                          className="text-foreground font-medium mb-3 px-2 py-1 rounded-lg bg-slate-50"
                          whileHover={{ scale: 1.02 }}
                        >
                          {item.label}
                        </motion.div>
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <motion.div
                              key={dropdownItem.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (dropIndex * 0.05) }}
                            >
                              <Link
                                to={dropdownItem.href}
                                className={`block text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-slate-100/50 group ${
                                  location.pathname === dropdownItem.href 
                                    ? 'text-primary bg-primary/10 border-l-2 border-primary' 
                                    : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                    {dropdownItem.icon}
                                  </span>
                                  <div className="flex-1">
                                    <div className="font-medium group-hover:text-primary transition-colors duration-300">
                                      {dropdownItem.label}
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1 group-hover:text-slate-600 transition-colors duration-300">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                <Link
                  to={item.href}
                          className={`block text-foreground hover:text-primary transition-all duration-300 px-4 py-3 rounded-lg hover:bg-slate-100/50 ${
                            location.pathname === item.href 
                              ? 'text-primary bg-primary/10 border-l-2 border-primary' 
                              : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                <motion.div 
                  className="px-4 pt-4 border-t"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div 
                    className="flex items-center space-x-2 text-sm text-muted-foreground mb-3 p-2 rounded-lg bg-slate-50"
                    whileHover={{ scale: 1.02 }}
                  >
                  <Phone className="h-4 w-4" />
                  <span>+261 34 28 449 51</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="hero" className="w-full shadow-lg" asChild>
                  <Link to="/contact">Nous contacter</Link>
                </Button>
                  </motion.div>
                </motion.div>
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;