import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FaBars, FaTimes, FaPhone, FaFacebook, FaChevronDown, FaBuilding, FaLeaf, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      dropdown: [
        { 
          label: 'Greentany Consulting', 
          href: '/greentany-consulting',
          description: 'Services de conseil en qualité et sécurité alimentaire',
          icon: FaShieldAlt,
          color: 'from-blue-500 to-blue-600'
        },
        { 
          label: 'Greentany Export', 
          href: '/greentany-export',
          description: 'Exportation d\'épices et ingrédients d\'origine Madagascar',
          icon: FaGlobe,
          color: 'from-emerald-500 to-emerald-600'
        }
      ]
    },
    { label: 'Produits', href: '/produits' },
    { label: 'À propos', href: '/apropos' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Greentany" className="h-10 w-auto" />
            <span className="text-xl font-bold text-slate-800">Greentany</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <div key={item.label}>
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <motion.button 
                          className={`flex items-center gap-2 font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-slate-100/50 ${
                            isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.label}
                          <motion.div
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="h-3 w-3" />
                          </motion.div>
                        </motion.button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="start" 
                        className="w-80 p-3 bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-2xl rounded-2xl"
                        sideOffset={8}
                      >
                        <motion.div 
                          className="grid gap-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.dropdown.map((dropdownItem, index) => {
                            const IconComponent = dropdownItem.icon;
                            const isDropdownActive = location.pathname === dropdownItem.href;
                            console.log(`Dropdown item ${dropdownItem.label}:`, { pathname: location.pathname, href: dropdownItem.href, isActive: isDropdownActive });
                            return (
                              <motion.div
                                key={dropdownItem.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                              >
                                <DropdownMenuItem asChild className="p-0">
                                  <Link
                                    to={dropdownItem.href}
                                    className={`w-full p-4 rounded-xl transition-all duration-300 hover:shadow-lg group relative overflow-hidden ${
                                      isDropdownActive ? 'bg-green-600 text-white' : ''
                                    }`}
                                  >
                                    {/* Background gradient on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${dropdownItem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                                    
                                    <div className="flex items-start gap-4 relative z-10">
                                      <motion.div 
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center shadow-lg group-hover:shadow-xl text-white transition-all duration-300 ${
                                          isDropdownActive ? 'bg-white text-green-600' : ''
                                        }`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                      >
                                        <IconComponent className="h-5 w-5 text-white" />
                                      </motion.div>
                                      <div className="flex-1">
                                        <div className={`font-semibold transition-colors duration-300 mb-1 ${
                                          isDropdownActive 
                                            ? 'text-white' 
                                            : 'text-slate-800 group-hover:text-blue-600'
                                        }`}>
                                          {dropdownItem.label}
                                        </div>
                                        <div className={`text-sm transition-colors duration-300 leading-relaxed ${
                                          isDropdownActive 
                                            ? 'text-white/90' 
                                            : 'text-slate-600 group-hover:text-white'
                                        }`}>
                                          {dropdownItem.description}
                                        </div>
                                      </div>
                                      <motion.div
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ x: -10 }}
                                        whileHover={{ x: 0 }}
                                      >
                                        <FaChevronDown className="h-4 w-4 text-slate-400 rotate-[-90deg]" />
                                      </motion.div>
                                    </div>
                                  </Link>
                                </DropdownMenuItem>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.href}
                        className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-slate-100/50 ${
                          isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Contact & Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-700">
              <FaPhone className="h-4 w-4" />
              <a 
                href="tel:+261342844951" 
                className="text-sm font-medium hover:text-blue-600 transition-colors duration-200"
              >
                +261 34 28 449 51
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.facebook.com/greentany.conseil.madagascar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <motion.div 
                        className="px-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`text-slate-700 font-medium mb-3 px-3 py-2 rounded-lg border border-slate-200/50 ${
                          isActive ? 'bg-blue-50 text-blue-700' : 'bg-gradient-to-r from-slate-50 to-slate-100'
                        }`}>
                          {item.label}
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((dropdownItem, dropIndex) => {
                            const IconComponent = dropdownItem.icon;
                            const isDropdownActive = location.pathname === dropdownItem.href;
                            console.log(`Mobile dropdown item ${dropdownItem.label}:`, { pathname: location.pathname, href: dropdownItem.href, isActive: isDropdownActive });
                            return (
                              <motion.div
                                key={dropdownItem.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dropIndex * 0.1, duration: 0.3 }}
                              >
                                <Link
                                  to={dropdownItem.href}
                                  className={`block transition-all duration-300 py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 group border border-transparent hover:border-slate-200/50 ${
                                    isDropdownActive ? 'bg-green-600 text-white' : 'text-slate-700 hover:text-slate-900'
                                  }`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div className="flex items-start gap-4">
                                    <motion.div 
                                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 ${
                                        isDropdownActive ? 'bg-white text-green-600' : ''
                                      }`}
                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                      <IconComponent className="h-4 w-4 text-white" />
                                    </motion.div>
                                    <div className="flex-1">
                                      <div className={`font-semibold transition-colors duration-300 mb-1 ${
                                        isDropdownActive 
                                          ? 'text-white' 
                                          : 'text-slate-800 group-hover:text-blue-600'
                                      }`}>
                                        {dropdownItem.label}
                                      </div>
                                      <div className={`text-xs transition-colors duration-300 leading-relaxed ${
                                        isDropdownActive 
                                          ? 'text-white/90' 
                                          : 'text-slate-600 group-hover:text-white'
                                      }`}>
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                    <motion.div
                                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                                      initial={{ x: -10 }}
                                      whileHover={{ x: 0 }}
                                    >
                                      <FaChevronDown className="h-3 w-3 text-slate-400 rotate-[-90deg]" />
                                    </motion.div>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to={item.href}
                          className={`block px-4 py-3 transition-all duration-300 rounded-lg mx-2 ${
                            isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                );
              })}
              <motion.div 
                className="px-4 py-2 border-t border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div className="flex items-center gap-2 text-slate-700 mb-2">
                  <FaPhone className="h-4 w-4" />
                  <a 
                    href="tel:+261342844951" 
                    className="text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                  >
                    +261 34 28 449 51
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://www.facebook.com/greentany.conseil.madagascar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;