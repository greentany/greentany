import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const clients = [
  { name: 'RASSETA EXPORT', image: '/Image1.jpg', description: "Accompagnement en certification et audit." },
  { name: 'GENERAL TRADING COMPANY', image: '/Image2.png', description: "Accompagnement GLOBALG.A.P. - GRASP et SMETA " },
  { name: 'ROSIN EXPORTATEUR PLANTEUR', image: '/Image3.png', description: "Accompagnement GLOBALG.A.P. et GRASP" },
  { name: 'Mon Litchi', image: '/Image4.png', description: "Accompagnement GLOBALG.A.P. et GRASP" },
  { name: 'LITE', image: '/Image5.png', description: "Accompagnement GLOBALG.A.P. – GRASP - SMETA et FAIRTRADE" },
  { name: 'SCIM Madagascar', image: '/Image6.png', description: "Accompagnement GLOBALG.A.P. – GRASP et Agriculture biologique" },
  { name: 'EXA Trading', image: '/Image7.png', description: "Accompagnement GLOBALG.A.P. – GRASP – SMETA et FAIRTRADE" },
  { name: 'CFM', image: '/Image8.png', description: "Accompagnement GLOBALG.A.P. – GRASP et SMETA" },
  { name: 'MALGAPRO', image: '/Image9.png', description: "Accompagnement GLOBALG.A.P. – GRASP et FAIRTRADE" },
  { name: 'GROUPE SODIAT', image: '/Image10.png', description: "Formation GRASP " },
  { name: 'SAMEHAVAH SARL', image: '/Image11.png', description: "Accompagnement GLOBALG.A.P. et GRASP" },
  { name: 'GASY FRUITS', image: '/Image12.png', description: "Accompagnement GLOBALG.A.P. – GRASP – SMETA - FAIRTRADE et RAINFOREST ALLIANCE " },
  { name: 'SOCIETE KWAI CHUNG & CIE', image: '/Image13.png', description: "Accompagnement GLOBALG.A.P. et GRASP " },
  { name: 'SAHANALA', image: '/Image14.png', description: "Formation au bonnes pratiques d’hygiène - GLOBALG.A.P. et GRASP  " },
  { name: 'MCO TRADE', image: '/Image15.png', description: "Accompagnement GLOBALG.A.P. et GRASP" },
  { name: 'AMBATOVY', image: '/Image16.png', description: "Accompagnement traitement des eaux industrielles	" }
];

const ReferencesPage = () => {
  const containerRef = useGSAPAnimations();
  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden section-gsap">
        <div className="absolute inset-0">
          <img src="/cabinet.png" alt="Références" className="w-full h-full object-cover" />
        </div>
        {/* Logo en haut à gauche - toujours visible */}
      <div className="absolute top-8 mt-24 left-16 z-45">
        <img
          src="/logo1.png"
          alt="Greentany Logo"
          className="h-20 w-auto md:h-24 lg:h-28 drop-shadow-lg"
        />
      </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Références
          </motion.h1>
        </div>
      </section>

      {/* Banner */}
      <section className="container mx-auto px-4 py-12 md:py-16 text-center section-gsap">
        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-700">
          Références du cabinet
        </h3>
        <div className="mt-6 flex flex-col items-center gap-6">
          <Link to="/contact">
            <button className="px-8 py-4 bg-[#FF6600] text-white rounded-xl font-bold shadow hover:brightness-110">
              Demande de devis gratuit
            </button>
          </Link>
          <p className="text-slate-700 max-w-3xl">
            Intervention auprès de plus de 20 entreprises à Madagascar en accompagnant la certification,
            l'audit, les diagnostics, la formation et le coaching.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 section-gsap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((c) => (
            <div key={c.name} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 flex flex-col items-center text-center gap-4">
              <img src={c.image} alt={c.name} className="h-20 object-contain" />
              <div>
                <h4 className="font-semibold text-slate-800">{c.name}</h4>
                <p className="text-slate-600 text-sm">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;


