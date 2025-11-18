import { Link } from "react-router-dom";
import { ShieldCheck, Microscope, ArrowRight, ChevronRight, Activity } from "lucide-react";
import { PackagingShowcase } from "@/components/PackagingShowcase";

const stats = [
  { label: "Verified Batches", value: "18K+" },
  { label: "Partnered Gyms", value: "120+" },
  { label: "Counterfeits Blocked", value: "4.2K" },
];

const featuredProducts = [
  { title: "Bold 200", compound: "Boldenone Undecylenate", metric: "200mg/ml" },
  { title: "Deca 200", compound: "Nandrolone Decanoate", metric: "200mg/ml" },
  { title: "Masteron P", compound: "Drostanolone Propionate", metric: "100mg/ml" },
  { title: "Anavar 10", compound: "Oxandrolone", metric: "10mg/tab" },
];

const manufacturingPillars = [
  {
    title: "Pharmaceutical Lab",
    description: "GMP-certified lines with redundant temperature & pressure control",
    icon: Microscope,
  },
  {
    title: "Lot Traceability",
    description: "Serialized tracking welded into packaging + QR authentication",
    icon: ShieldCheck,
  },
  {
    title: "Human Performance",
    description: "Formulations mapped to athlete feedback & biomarker studies",
    icon: Activity,
  },
];

export const HomePage = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section className="pt-16 md:pt-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center text-sm uppercase tracking-[0.3em] text-brand-blue border border-brand-blue/20 rounded-full px-4 py-1">
              AR High Performance Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight canon-stripe pl-10">
              Pharmaceutical-grade fuel for people who outgrow the ordinary.
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              A.R PHARMA engineers bold cycles, anti-counterfeit packaging, and instant QR authentication for athletes chasing legitimate results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/catalog"
                className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-2xl font-semibold shadow-[0_20px_45px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all"
              >
                Browse the Lab
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/verify"
                className="inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-brand-blue border border-brand-blue/30 hover:bg-white transition-colors"
              >
                Verify product <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-heading font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <PackagingShowcase />
        </div>
      </section>

      {/* Manufacturing pillars */}
      <section className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {manufacturingPillars.map((pillar) => (
            <div key={pillar.title} className="glass-panel rounded-3xl p-8 space-y-4">
              <pillar.icon className="h-12 w-12 text-brand-blue" />
              <h3 className="text-xl font-heading font-semibold text-gray-900">{pillar.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured line */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-[32px] border border-gray-200 p-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Featured cycle</p>
              <h2 className="text-3xl font-heading font-bold mt-2">Elite release for strength + conditioning blocks</h2>
            </div>
            <Link to="/catalog" className="inline-flex items-center text-brand-blue font-semibold">
              View full protocol <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((item) => (
              <div key={item.title} className="relative border border-gray-200 rounded-2xl p-6">
                <span className="absolute inset-y-6 left-5 w-1 bg-gradient-to-b from-brand-blue-light via-brand-blue to-brand-blue-dark rounded-full" />
                <div className="pl-6">
                  <p className="text-xs uppercase tracking-[0.5em] text-gray-400">{item.metric}</p>
                  <h3 className="text-2xl font-heading font-bold mt-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.compound}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification workflow */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-blue-dark to-brand-blue rounded-[32px] text-white p-10 md:p-14 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs text-white/60">Product integrity</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Instant verification workflow</h2>
            </div>
            <Link
              to="/verify"
              className="inline-flex items-center bg-white text-brand-blue px-6 py-3 rounded-2xl font-semibold"
            >
              Launch verifier <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {["Scratch", "Scan", "Authenticate", "Track"].map((step, index) => (
              <div key={step} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-sm uppercase tracking-[0.3em] text-white/60">Step {index + 1}</div>
                <h3 className="text-xl font-heading font-semibold mt-3">{step}</h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  {index === 0 && "Reveal serialized code hidden beneath tamper label"}
                  {index === 1 && "Use QR to jump straight to the verification console"}
                  {index === 2 && "Match code against AR PHARMA's whitelist instantly"}
                  {index === 3 && "Get timestamp + lot info for your personal record"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
