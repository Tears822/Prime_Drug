import { Mail, Phone, MapPin } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-20 space-y-12">
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.4em] text-gray-400">Get in touch</span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold">We're operators first, customer service second.</h1>
        <p className="text-gray-600">
          Reach our lab, logistics crew, or athlete support desk directly. Expect replies inside 24 hours during business days.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_420px] gap-10">
        <form className="glass-panel rounded-[32px] p-10 space-y-6">
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-gray-400">Name</label>
            <input
              type="text"
              className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
              placeholder="Your name"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm uppercase tracking-[0.3em] text-gray-400">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm uppercase tracking-[0.3em] text-gray-400">Phone</label>
              <input
                type="tel"
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-gray-400">Topic</label>
            <select className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none">
              <option>Product inquiry</option>
              <option>Verification issue</option>
              <option>Distribution partnership</option>
            </select>
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-gray-400">Message</label>
            <textarea
              rows={5}
              className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
              placeholder="Tell us how we can help."
            />
          </div>
          <button className="w-full bg-brand-blue text-white font-semibold py-4 rounded-2xl hover:bg-brand-blue-dark transition-colors">
            Send request
          </button>
        </form>

        <aside className="stripe-card rounded-[32px] p-10 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Direct lines</p>
            <h2 className="text-3xl font-heading font-bold mt-2">Talk with a human</h2>
          </div>
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Lab & verification", value: "verify@primelaboratory.com" },
              { icon: Phone, label: "Global logistics", value: "+1 (323) 555 8902" },
              { icon: MapPin, label: "HQ", value: "Cayman Bio Park · Building 04" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="bg-brand-blue/10 text-brand-blue rounded-2xl p-3">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{item.label}</p>
                  <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-brand-blue text-white rounded-2xl p-6 space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Office hours</p>
            <p className="text-lg font-semibold">Mon-Fri · 09:00 - 18:00 GMT-5</p>
          </div>
        </aside>
      </div>
    </div>
  );
};
