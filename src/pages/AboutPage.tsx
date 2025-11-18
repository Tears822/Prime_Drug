import { ShieldCheck, FlaskConical, Globe, Users } from "lucide-react";

const milestones = [
  { year: "2015", title: "Origin Lab", description: "Started as a pharma R&D outfit compounding hormone therapies." },
  { year: "2018", title: "Counterfeit War", description: "Launched QR-linked crowns + serial whitelists to stop fakes." },
  { year: "2022", title: "Athlete Program", description: "Partnered with elite gyms and medical advisors worldwide." },
];

const values = [
  {
    title: "Clinical Rigor",
    description: "We run validated chromatography + potency testing on every lot.",
    icon: FlaskConical,
  },
  {
    title: "Integrity Packaging",
    description: "Custom cartons with dual stripes, QR crowns, and serialized codes.",
    icon: ShieldCheck,
  },
  {
    title: "Global Access",
    description: "Logistics network covering 38 countries with cold-chain protection.",
    icon: Globe,
  },
];

const team = [
  { name: "Maya Roldan", role: "Pharmaceutical Director", focus: "Sterility protocols & GMP audits" },
  { name: "Elias Nash", role: "Lead Chemist", focus: "Formulation design & stability mapping" },
  { name: "Andre Cole", role: "Performance Advisor", focus: "Athlete data & cycle planning" },
];

export const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-20 space-y-16">
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400">Inside AR PHARMA</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold canon-stripe pl-10">
            We design pharmaceutical-grade fuel for people who refuse shortcuts.
          </h1>
          <p className="text-gray-600">
            Founded by chemists and pro coaches, AR PHARMA closes the gap between sterile lab production and real-world strength cycles.
            Every batch is traceable, every carton is authenticated, and every release is athlete-tested.
          </p>
        </div>
        <div className="stripe-card rounded-[36px] p-10 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Lot Integrity</p>
            <span className="text-sm font-semibold text-brand-blue">Batch QA · 07</span>
          </div>
          <div className="border border-gray-200 rounded-[28px] p-8 relative overflow-hidden">
            <div className="absolute inset-y-6 left-10 w-1.5 bg-gradient-to-b from-brand-blue-light to-brand-blue rounded-full" />
            <div className="absolute inset-y-6 left-16 w-1 bg-gradient-to-b from-brand-blue/20 to-brand-blue-dark/60 rounded-full" />
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-heading font-bold">AR PRIME</h3>
              <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">250mg / ml</p>
              <p className="text-gray-500 text-sm">Testosterone Enanthate · Pharmaceutical lot</p>
            </div>
            <img src="/logo.png" alt="AR Crown" className="absolute top-8 right-10 h-10 w-auto opacity-30" />
          </div>
          <p className="text-sm text-gray-500">
            Stripes, QR crowns, and serialized codes are embedded to make counterfeits painfully obvious.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {values.map((value) => (
          <div key={value.title} className="glass-panel rounded-3xl p-8 space-y-4">
            <value.icon className="h-12 w-12 text-brand-blue" />
            <h3 className="text-xl font-heading font-semibold">{value.title}</h3>
            <p className="text-sm text-gray-600">{value.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-[32px] border border-gray-200 p-10 space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Timeline</p>
          <h2 className="text-3xl font-heading font-bold mt-2">Decade of lab obsession</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="relative border border-gray-200 rounded-2xl p-6">
              <span className="absolute inset-y-6 left-5 w-1 bg-gradient-to-b from-brand-blue to-brand-blue-dark rounded-full" />
              <div className="pl-8 space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{milestone.year}</p>
                <h3 className="text-xl font-heading font-semibold">{milestone.title}</h3>
                <p className="text-sm text-gray-500">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-blue text-white rounded-[32px] p-10 md:p-14 space-y-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/70">
          <Users className="h-4 w-4" /> Leadership Capsule
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-heading font-bold">{member.name}</h3>
              <p className="text-sm text-white/70">{member.role}</p>
              <p className="text-sm text-white/80 mt-4">{member.focus}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};