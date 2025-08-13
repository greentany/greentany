import About from '@/components/About';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cabinet = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero: image de fond + titre centré */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/cabinet.png')" }}
          ></div>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Le cabinet
          </motion.h1>
        </div>
      </section>

      <About/>

      {/* Description: fond image + overlay dark + contenu centré */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src="/cabinet1.png" alt="Cabinet" className="w-full h-auto object-cover" />
      </section>

      {/* Details section: alternance texte/image + bouton */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="space-y-16">
          {/* Bloc 1: texte à gauche, image à droite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
              Un réseau de consultants QSE et RSE au plus proche de vous, partout à Madagascar
              </h3>
              <p className="text-slate-600 leading-relaxed">
              <span className='text-[#FF6600] font-bold'>GREENTANY CONSULTING</span> s’appuie sur un réseau solide de plus de 5 consultants experts répartis sur l’ensemble du territoire national. Cette organisation unique garantit une proximité géographique précieuse, réduisant les coûts et délais liés aux déplacements, tout en offrant une grande réactivité et une parfaite connaissance des enjeux territoriaux. 
              </p>
              <p className="text-slate-600 leading-relaxed">
              Grâce à ce maillage local, nous proposons un accompagnement personnalisé, adapté à vos besoins spécifiques, pour des solutions opérationnelles et efficaces.
              </p>
            </div>
            <div>
              <img
                src="/cabinet2.jpg"
                alt="Approche QHSE et RSE"
                className="w-full h-[360px] object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* Bloc 2: image à gauche, texte à droite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <img
                src="/cabinet3.jpg"
                alt="Mise en œuvre"
                className="w-full h-[360px] object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Un accompagnement adapté à chaque organisation
                </h3>
              <p className="text-slate-600 leading-relaxed">
              Avec <span className='underline text-blue-600'>plus de 20 clients accompagnés</span>, <span className='text-[#FF6600] font-bold'>GREENTANY CONSULTING</span> est un partenaire reconnu dans des secteurs variés : industrie agroalimentaire, environnement, services, éducation,… 
              </p>
              <p className="text-slate-600 leading-relaxed">
              Nous intervenons auprès de TPE, PME, ETI et grands comptes, en personnalisant chaque mission pour répondre aux réalités et enjeux spécifiques de nos clients.
              </p>
              <Link to="/contact">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-[#FF6600] text-white rounded-xl font-bold shadow-lg hover:brightness-110 transition">
                Découvrir nos clients
              </button>
            </Link>
            </div>
            
          </div>

        </div>
      </section>

      {/* Solutions section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-blue-700">
            Des solutions sur mesure pour structurer et dynamiser vos démarches QSE et RSE
          </h3>
          <div className="mt-6 space-y-4 text-slate-600">
            <p>
            Spécialistes des référentiels reconnus – <span className='text-[#FF6600] font-bold'>GLOBALGAP, GRASP, HACCP, Agriculture Biologique, FLO Fair-Trade TRADER & SPO, RAINFOREST ALLIANCE, SMETA …</span> – nous vous accompagnons dans la mise en place, l’optimisation et l’amélioration continue de votre système de management QHSE et RSE.
            </p>
            <p>
            Notre approche vise à garantir la conformité normative et réglementaire, sécuriser vos certifications, renforcer la satisfaction client et faire évoluer vos démarches vers plus de performance. Nous vous aidons à structurer des Systèmes de Management à forte valeur ajoutée.
            </p>
          </div>
          <div className="h-1 w-[80%] bg-[#FF6600] rounded-full mx-auto mt-8" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
            <img src="/card1.jpg" alt="conseil" className="w-full h-40 object-cover" />
            <div className="p-6 space-y-2">
              <h4 className="font-bold text-[#FF6600] text-2xl">Conseil</h4>
              <p className="text-slate-600 text-sm">
              Un accompagnement stratégique pour bâtir, adapter ou faire évoluer votre Système de Management selon vos enjeux et vos référentiels : qualité, santé-sécurité, environnement, RSE, référentiels métiers spécifiques.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
            <img src="/card2.png" alt="Audit" className="w-full h-40 object-cover" />
            <div className="p-6 space-y-2">
              <h4 className="font-bold text-[#FF6600] text-2xl">Audit</h4>
              <p className="text-slate-600 text-sm">
              Des audits internes ou à blanc pour évaluer votre conformité, détecter les écarts et fiabiliser votre démarche avant une certification. C’est une exigence des normes aussi, mais également un outil d’amélioration indéniable lorsqu’il est réalisé de manière efficace.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
            <img src="/card3.png" alt="Formation" className="w-full h-40 object-cover" />
            <div className="p-6 space-y-2">
              <h4 className="font-bold text-[#FF6600] text-2xl">Formation</h4>
              <p className="text-slate-600 text-sm">
              Des sessions pédagogiques en présentiel ou à distance, pour renforcer les compétences de vos équipes sur les enjeux QHSE et RSE.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section: texte à gauche + image à droite */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Prêt à accélérer vos démarches QSE et RSE ?
            </h3>
            <p className="text-slate-600 leading-relaxed">
            Contactez <span className='text-[#ff6600] font-bold'>GREENTANY Consulting</span>  pour échanger sur vos projets.Ensemble, construisons une démarche durable et performante, adaptée à vos objectifs.

            </p>
            <Link to="/contact" className='mt-3 items-center'>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-[#FF6600] text-white rounded-xl font-bold shadow-lg hover:brightness-110 transition">
                Contactez-nous
              </button>
            </Link>
          </div>
          <div>
            <img
              src="/cta1.jpg"
              alt="Contactez notre équipe"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cabinet; 