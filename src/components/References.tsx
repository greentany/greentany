import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const References = () => {
  const clients = [
    { name: 'Toyota', category: 'Automobile' },
    { name: 'LITE', category: 'Télécommunications' },
    { name: 'SCIM Madagascar', category: 'Industrie' },
    { name: 'EXA Trading', category: 'Commerce' },
    { name: 'CFM', category: 'Finance' },
    { name: 'MALCAPRO', category: 'Agriculture' },
    { name: 'Groupe Soalat', category: 'Agroalimentaire' },
    { name: 'Gasyfruits SAMEVAH S.A.R.L', category: 'Fruits & Légumes' },
    { name: 'SKCC', category: 'Construction' },
    { name: 'SAHANALA MADAGASCAR', category: 'Agriculture' },
    { name: 'MCO TRADE', category: 'Commerce' },
    { name: 'Ambatovy', category: 'Mines' }
  ];

  return (
    <section id="references" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos Références
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "GREENTANY Consulting, c'est plus de 200 missions pour des clients de tous horizons"
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="text-center p-6 hover:shadow-brand transition-all duration-300 border-2 hover:border-primary/20 bg-card">
                <CardContent className="space-y-3">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-lg">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-brand-glow">
            <h3 className="text-2xl font-bold text-white mb-4">
              Une Expertise Reconnue
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Nos clients nous font confiance pour leur accompagnement dans leurs 
              démarches qualité, sécurité alimentaire et conformité aux normes internationales.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default References;