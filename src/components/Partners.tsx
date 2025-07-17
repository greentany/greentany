import { Marquee } from "@/components/ui/marquee";

const partners = [
  { name: "Compagnie Fruitière", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=cover" },
  { name: "Flocert", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200&h=200&fit=cover" },
  { name: "Ethical Trade Services", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&h=200&fit=cover" },
  { name: "Ecocert", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200&h=200&fit=cover" },
  { name: "Colead", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&h=200&fit=cover" },
  { name: "Rainforest Alliance", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=200&h=200&fit=cover" },
];

export default function Partners() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">
          Nos partenaires
        </h2>
        <p className="text-lg text-slate-600 mb-10 text-center">
          Nous travaillons avec les partenaires suivants :
        </p>
        <Marquee pauseOnHover speed={20}>
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center mx-16">
              <div className="flex items-center justify-center bg-white rounded-full shadow-lg h-28 w-28 mb-3 border-2 border-slate-200">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="h-24 w-24 object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <span className="text-base text-slate-800 font-semibold text-center mt-1 drop-shadow-sm">
                {partner.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
} 