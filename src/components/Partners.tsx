import { Marquee } from "@/components/ui/marquee";

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
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Nos partenaires
        </h2>
        <p className="text-lg text-slate-600 mb-10 text-center">
          Nous travaillons avec les partenaires suivants :
        </p>
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