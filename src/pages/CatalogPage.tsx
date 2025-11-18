import { useState } from "react";
import { Filter, Sparkles } from "lucide-react";

const products = [
  {
    name: "Bold 200",
    subtitle: "Boldenone Undecylenate",
    image: "/collagen-peptides.png",
    category: "vials",
    dosage: "200mg/ml"
  },
  {
    name: "Deca 200",
    subtitle: "Nandrolone Decanoate",
    image: "/collagen-peptides.png",
    category: "vials",
    dosage: "200mg/ml"
  },
  {
    name: "Masteron E 200",
    subtitle: "Drostanolone Enanthate",
    image: "/collagen-peptides.png",
    category: "vials",
    dosage: "200mg/ml"
  },
  {
    name: "Masteron P 100",
    subtitle: "Drostanolone Propionate",
    image: "/collagen-peptides.png",
    category: "vials",
    dosage: "100mg/ml"
  },
  {
    name: "NPP 100",
    subtitle: "Nandrolone Phenylpropionate",
    image: "/collagen-peptides.png",
    category: "vials",
    dosage: "100mg/ml"
  },
  {
    name: "Primo 100",
    subtitle: "Methenolone Enanthate",
    image: "/collagen-peptides.png",
    category: "vials",
    dosage: "100mg/ml"
  },
  {
    name: "Anadrol 50",
    subtitle: "Oxymetholone",
    image: "/collagen-peptides.png",
    category: "tablets",
    dosage: "50mg"
  },
  {
    name: "Anavar 10",
    subtitle: "Oxandrolone",
    image: "/collagen-peptides.png",
    category: "tablets",
    dosage: "10mg"
  },
  {
    name: "Andarine 25",
    subtitle: "S-4",
    image: "/collagen-peptides.png",
    category: "tablets",
    dosage: "25mg"
  },
  {
    name: "Arimidex 1",
    subtitle: "Anastrozole",
    image: "/collagen-peptides.png",
    category: "tablets",
    dosage: "1mg"
  },
  {
    name: "Cardarine 10",
    subtitle: "GW-501516",
    image: "/collagen-peptides.png",
    category: "tablets",
    dosage: "10mg"
  },
  {
    name: "Cialis 20",
    subtitle: "Tadalafil",
    image: "/collagen-peptides.png",
    category: "tablets",
    dosage: "20mg"
  },
];

export const CatalogPage = () => {
  const [filter, setFilter] = useState<"all" | "vials" | "tablets">("all");

  const filteredProducts = filter === "all"
    ? products
    : products.filter((p) => p.category === filter);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-[280px_1fr] gap-10">
        <aside className="stripe-card rounded-[32px] p-8 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">AR Protocols</p>
            <h1 className="text-3xl font-heading font-bold mt-3">Complete Product Library</h1>
            <p className="text-sm text-gray-500 mt-3">
              Choose your format, review lot consistency, and plan your cycle with legitimate sources.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
              <Filter className="h-4 w-4 text-brand-blue" /> Filter stack
            </p>
            {[
              { key: "all", label: "All releases" },
              { key: "vials", label: "Injectables · Vials" },
              { key: "tablets", label: "Tablets · SARMs" },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setFilter(option.key as typeof filter)}
                className={`w-full text-left px-4 py-3 rounded-2xl border transition-all ${
                  filter === option.key
                    ? "border-brand-blue bg-brand-blue/10 text-brand-blue font-semibold"
                    : "border-gray-200 hover:border-brand-blue/40 text-gray-600"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="bg-brand-blue rounded-2xl text-white p-6 space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Integrity Tag</p>
            <p className="text-base font-semibold">Each SKU is mapped to QR whitelist entries. Zero tolerance policy.</p>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Currently viewing</p>
              <h2 className="text-2xl font-heading font-bold mt-2">
                {filter === "all" ? "Entire catalog" : filter === "vials" ? "Injectable Vials" : "Tablet Protocols"}
              </h2>
            </div>
            <span className="inline-flex items-center text-sm text-gray-500 bg-white border border-gray-200 rounded-full px-4 py-1.5 gap-2">
              <Sparkles className="h-4 w-4 text-brand-blue" />
              {filteredProducts.length} SKUs curated
            </span>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <article
                key={index}
                className="relative bg-white rounded-[28px] border border-gray-200 p-6 overflow-hidden group"
              >
                <div className="absolute inset-y-6 left-6 w-1 bg-gradient-to-b from-brand-blue-light via-brand-blue to-brand-blue-dark rounded-full" />
                <div className="pl-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.4em] text-gray-400">{product.dosage}</span>
                    <span className="text-xs font-semibold text-brand-blue/70 border border-brand-blue/30 rounded-full px-3 py-1">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.subtitle}</p>
                  <div className="h-44 bg-gradient-to-br from-brand-gray to-white rounded-2xl border border-dashed border-brand-blue/20 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="bg-white border border-dashed border-gray-300 rounded-3xl p-12 text-center text-gray-500">
              No compounds in this format yet. Join the waitlist.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
