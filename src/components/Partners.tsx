import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";

const partners = [
  { name: "Compagnie Fruitière", img: "/Image17.png" },
  { name: "CTHT", img: "/Image18.png" },
  { name: "S.I.I.M", img: "/Image19.png" },
  { name: "FLOCERT", img: "/Image20.png" },
  { name: "SNF FLOERGER", img: "/Image21.png" },
  { name: "ETHICAL TRADE SERVICES", img: "/Image22.png" },
  { name: "COLEAD", img: "/Image23.png" },
  { name: "GROUPE ECOCERT", img: "/Image24.png" },
  { name: "RAIN FOREST ALLIANCE", img: "/Image25.png" },
];

export default function Partners() {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Partenaires</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nous travaillons avec les partenaires suivants :
            </p>
          </motion.div>
        <Marquee pauseOnHover speed={20}>
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center mx-8">
              <div className="flex items-center justify-center bg-white rounded-xl shadow-lg h-32 w-32 mb-3 border border-slate-200 overflow-hidden">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
} 