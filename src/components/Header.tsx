import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FaBars, FaTimes, FaFacebook, FaWhatsapp, FaChevronDown, FaBuilding, FaLeaf, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AnnouncementBar from '@/components/AnnouncementBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
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
        { label: 'Le cabinet', href: '/cabinet' },
    { 
      label: 'Nos produit', 
      href: '/produits',
      dropdown: [
        { 
          label: 'Tous nos produits', 
          href: '/produits',
          color: 'from-blue-500 to-blue-600'
        },
        { 
          label: 'Nos épices et ingredients', 
          href: '/produits?category=epices',
          color: 'from-emerald-500 to-emerald-600'
        },
        { 
          label: 'Nos fruits tropicaux', 
          href: '/produits?category=fruits-tropicaux',
          color: 'from-emerald-500 to-emerald-600'
        },
        { 
          label: 'Nos grains secs', 
          href: '/produits?category=epices',
          color: 'from-emerald-500 to-emerald-600'
        },
      ]
    },
    { label: 'Références', href: '/references' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <AnnouncementBar />
      <div className={`container mx-auto px-4 ${
        isScrolled ? 'bg-white backdrop-blur-md shadow-lg' : ''
      }`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Greentany" className="h-10 w-auto" />
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
                             const isDropdownActive = location.pathname === dropdownItem.href;
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
                                      <div className="flex-1">
                                        <div className={`font-semibold transition-colors duration-300 mb-1 ${
                                          isDropdownActive 
                                            ? 'text-white' 
                                            : 'text-slate-800 group-hover:text-blue-600'
                                        }`}>
                                          {dropdownItem.label}
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
                        className={`font-medium transition-all duration-300 rounded-lg ${
                          item.label === 'Contact'
                            ? 'px-4 py-2 bg-slate-700 text-white hover:bg-slate-800 shadow-sm'
                            : `px-3 py-2 hover:bg-slate-100/50 ${
                                isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600'
                              }`
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
              <FaWhatsapp className="h-4 w-4 text-green-600" />
              <a 
                href="https://wa.me/261342844951"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-green-600 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                +261 34 28 449 51
              </a>
            </div>
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain"
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
                        <button
                          type="button"
                          onClick={() => setOpenMobileDropdown(prev => prev === item.label ? null : item.label)}
                          aria-expanded={openMobileDropdown === item.label}
                          className={`w-full text-left text-slate-700 font-medium mb-3 px-3 py-2 rounded-lg border border-slate-200/50 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                            isActive ? 'bg-blue-50 text-blue-700' : 'bg-gradient-to-r from-slate-50 to-slate-100'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            <FaChevronDown className={`h-3 w-3 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                          </div>
                        </button>
                        {openMobileDropdown === item.label && (
                          <div className="pl-4 space-y-2">
                          {item.dropdown.map((dropdownItem, dropIndex) => {
                            const isDropdownActive = location.pathname === dropdownItem.href;
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
                                    <div className="flex-1">
                                      <div className={`font-semibold transition-colors duration-300 mb-1 ${
                                        isDropdownActive 
                                          ? 'text-white' 
                                          : 'text-slate-800 group-hover:text-blue-600'
                                      }`}>
                                        {dropdownItem.label}
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
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to={item.href}
                          className={`block transition-all duration-300 rounded-lg mx-2 ${
                            item.label === 'Contact'
                              ? 'px-4 py-3 bg-slate-700 text-white text-center hover:bg-slate-800 shadow-sm'
                              : `px-4 py-3 ${
                                  isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                }`
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
                  <FaWhatsapp className="h-4 w-4 text-green-600" />
                  <a 
                    href="https://wa.me/261342844951" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-green-600 transition-colors duration-200"
                    aria-label="WhatsApp"
                  >
                    +261 34 28 449 51
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