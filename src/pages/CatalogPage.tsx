import { useState } from "react";
import { Filter, Sparkles } from "lucide-react";
import { ThreeDVial } from "@/components/ThreeDVial";

const products = [
  // Injectables - Vials with actual product images
  {
    name: "Test E 250",
    subtitle: "Testosterone Enanthate",
    category: "vials",
    dosage: "250mg/ml",
    image: "/assets/TEST.png",
    has3D: false
  },
  {
    name: "Test P 100",
    subtitle: "Testosterone Propionate",
    category: "vials",
    dosage: "100mg/ml",
    image: "/assets/testP.png",
    has3D: false
  },
  {
    name: "Bold 200",
    subtitle: "Boldenone Undecylenate",
    category: "vials",
    dosage: "200mg/ml",
    image: "/assets/BOLD.png",
    has3D: false
  },
  {
    name: "Deca 200",
    subtitle: "Nandrolone Decanoate",
    category: "vials",
    dosage: "200mg/ml",
    image: "/assets/DECA.png",
    has3D: false
  },
  {
    name: "NPP 100",
    subtitle: "Nandrolone Phenylpropionate",
    category: "vials",
    dosage: "100mg/ml",
    image: "/assets/Nandrolone phenylpropionate.png",
    has3D: false
  },
  {
    name: "Tren A 100",
    subtitle: "Trenbolone Acetate",
    category: "vials",
    dosage: "100mg/ml",
    image: "/assets/tren ace.png",
    has3D: false
  },
  {
    name: "Tren E 200",
    subtitle: "Trenbolone Enanthate",
    category: "vials",
    dosage: "200mg/ml",
    image: "/assets/tren enanthate.png",
    has3D: false
  },
  {
    name: "Masteron P 100",
    subtitle: "Drostanolone Propionate",
    category: "vials",
    dosage: "100mg/ml",
    image: "/assets/MasteronPROP.png",
    has3D: false
  },
  
  // Peptides
  {
    name: "HGH 10IU",
    subtitle: "Human Growth Hormone",
    category: "peptides",
    dosage: "10IU/vial",
    color: "#f97316",
    has3D: true
  },
  {
    name: "IGF-1 LR3",
    subtitle: "Insulin Growth Factor",
    category: "peptides",
    dosage: "1mg/vial",
    color: "#fb923c",
    has3D: true
  },
  {
    name: "CJC-1295",
    subtitle: "Growth Hormone Peptide",
    category: "peptides",
    dosage: "2mg/vial",
    color: "#fdba74",
    has3D: true
  },
  {
    name: "Ipamorelin",
    subtitle: "GHRP Peptide",
    category: "peptides",
    dosage: "2mg/vial",
    color: "#fbbf24",
    has3D: true
  },
  {
    name: "BPC-157",
    subtitle: "Body Protection Compound",
    category: "peptides",
    dosage: "5mg/vial",
    color: "#facc15",
    has3D: true
  },
  {
    name: "TB-500",
    subtitle: "Thymosin Beta-4",
    category: "peptides",
    dosage: "2mg/vial",
    color: "#fde047",
    has3D: true
  },
  {
    name: "Melanotan II",
    subtitle: "Melanocyte Stimulating",
    category: "peptides",
    dosage: "10mg/vial",
    color: "#a16207",
    has3D: true
  },
  {
    name: "PT-141",
    subtitle: "Bremelanotide",
    category: "peptides",
    dosage: "10mg/vial",
    color: "#ca8a04",
    has3D: true
  },
  
  // Orals - Tablets/Capsules with actual product images from assets folder
  {
    name: "Anadrol 50",
    subtitle: "Oxymetholone",
    category: "oral",
    dosage: "50mg",
    image: "/assets/ANADROL.png",
    has3D: false
  },
  {
    name: "Anavar 10",
    subtitle: "Oxandrolone",
    category: "oral",
    dosage: "10mg",
    image: "/assets/ANAVAR.png",
    has3D: false
  },
  {
    name: "Dianabol 10",
    subtitle: "Methandienone",
    category: "oral",
    dosage: "10mg",
    image: "/assets/DIANABOL.png",
    has3D: false
  },
  {
    name: "Winstrol 10",
    subtitle: "Stanozolol",
    category: "oral",
    dosage: "10mg",
    image: "/assets/WINSTROL.png",
    has3D: false
  },
  {
    name: "Halotestin 10",
    subtitle: "Fluoxymesterone",
    category: "oral",
    dosage: "10mg",
    image: "/assets/HALO.png",
    has3D: false
  },
];

export const CatalogPage = () => {
  const [filter, setFilter] = useState<"all" | "vials" | "peptides" | "oral">("all");

  const filteredProducts = filter === "all"
    ? products
    : products.filter((p) => p.category === filter);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-[280px_1fr] gap-10">
        <aside className="stripe-card rounded-[32px] p-8 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Prime Protocols</p>
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
                { key: "peptides", label: "Peptides · HGH" },
                { key: "oral", label: "Tablets · Orals" },
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
                    {filter === "all" ? "Entire catalog" : filter === "vials" ? "Injectable Vials" : filter === "peptides" ? "Peptide Protocols" : "Oral Protocols"}
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
                  <div className="h-64 bg-gradient-to-br from-brand-gray to-white rounded-2xl border border-dashed border-brand-blue/20 overflow-hidden flex items-center justify-center p-4">
                    {product.has3D ? (
                      <ThreeDVial color={product.color} label={product.name} autoRotate={false} />
                    ) : product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-blue/40 flex items-center justify-center">
                            <span className="text-3xl font-heading font-bold text-brand-blue">
                              {product.dosage.match(/\d+/)?.[0]}
                            </span>
                          </div>
                          <p className="text-xs uppercase tracking-wider text-gray-400">Tablet</p>
                        </div>
                      </div>
                    )}
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
