import { motion } from 'framer-motion';
import { FileText, BookOpen, ClipboardCheck, Award, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductsPage = () => {
  const products = [
    {
      icon: FileText,
      title: 'Manuel HACCP Complet',
      description: 'Guide détaillé pour la mise en place du système HACCP dans votre entreprise',
      features: ['250+ pages', 'Modèles de documents', 'Check-lists incluses', 'Exemples pratiques'],
      category: 'Documentation',
      price: '150€',
      format: 'PDF + Documents Word',
      popular: true
    },
    {
      icon: ClipboardCheck,
      title: 'Kit d\'Audit ISO 9001',
      description: 'Ensemble complet d\'outils pour réaliser vos audits internes ISO 9001:2015',
      features: ['Grilles d\'audit', 'Rapports types', 'Plans d\'action', 'Fiches de non-conformité'],
      category: 'Outils',
      price: '120€',
      format: 'Excel + PDF'
    },
    {
      icon: BookOpen,
      title: 'Formation E-learning HACCP',
      description: 'Module de formation en ligne pour sensibiliser vos équipes à la sécurité alimentaire',
      features: ['4h de formation', 'Quiz interactifs', 'Certificat de formation', 'Accès 12 mois'],
      category: 'Formation',
      price: '80€/personne',
      format: 'Plateforme en ligne'
    },
    {
      icon: Award,
      title: 'Procédures ISO 9001',
      description: 'Pack de procédures type adaptables pour votre système qualité',
      features: ['15 procédures', 'Modifiables', 'Conformes ISO 9001', 'Guide d\'adaptation'],
      category: 'Documentation',
      price: '200€',
      format: 'Word + PDF'
    },
    {
      icon: ClipboardCheck,
      title: 'Tableaux de Bord Qualité',
      description: 'Indicateurs et tableaux de bord pour piloter votre système qualité',
      features: ['20+ indicateurs', 'Graphiques automatiques', 'Reporting mensuel', 'Instructions'],
      category: 'Outils',
      price: '90€',
      format: 'Excel'
    },
    {
      icon: FileText,
      title: 'Guide Préparation Audit',
      description: 'Méthodologie complète pour préparer efficacement vos audits de certification',
      features: ['Check-list préparation', 'Simulation d\'audit', 'Conseils experts', 'Cas pratiques'],
      category: 'Guide',
      price: '60€',
      format: 'PDF'
    }
  ];

  const categories = ['Tous', 'Documentation', 'Outils', 'Formation', 'Guide'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nos Produits
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Outils pratiques, guides et formations pour vous accompagner 
              dans vos démarches qualité et sécurité alimentaire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-background/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Tous' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-brand transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden">
                  {product.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary text-secondary-foreground">
                        Populaire
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Badge variant="outline" className="w-fit">
                        {product.category}
                      </Badge>
                      <CardTitle className="text-xl text-primary">{product.title}</CardTitle>
                      <CardDescription className="text-base">{product.description}</CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{product.format}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="hero" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Acheter
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pourquoi choisir nos produits ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des outils développés par des experts avec plus de 15 ans d'expérience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Prêts à l\'emploi',
                description: 'Outils directement utilisables, sans modification nécessaire'
              },
              {
                title: 'Conformes aux normes',
                description: 'Respectent scrupuleusement les exigences réglementaires'
              },
              {
                title: 'Mise à jour gratuite',
                description: 'Accès aux mises à jour pendant 12 mois'
              },
              {
                title: 'Support inclus',
                description: 'Assistance technique par email pendant 3 mois'
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-primary p-12 rounded-3xl shadow-brand-glow">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Besoin d'un produit sur mesure ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Nous développons également des outils personnalisés selon vos besoins spécifiques
              </p>
              <Button variant="secondary" size="lg">
                Demander un devis personnalisé
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;