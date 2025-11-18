import { ThreeDBox } from "@/components/ThreeDBox";

export const PackagingShowcase = () => {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
      <div className="w-full rounded-[36px] border border-dashed border-brand-blue/20 bg-white/70 p-8 shadow-[0_30px_60px_rgba(37,99,235,0.08)]">
        <div className="text-xs uppercase tracking-[0.4em] text-brand-blue mb-4">Prime carton dieline</div>
        <div className="relative rounded-[28px] border border-brand-blue/10 overflow-hidden bg-gradient-to-br from-brand-blue/5 to-white">
          <img
            src="/IMG_1270.png"
                alt="Prime Laboratory dieline"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative w-full max-w-md mx-auto">
        <div className="absolute inset-0 blur-3xl bg-brand-blue/10" aria-hidden="true" />
        <div className="relative rounded-[36px] border border-white/40 bg-white/70 shadow-[0_40px_80px_rgba(30,64,175,0.25)] p-6">
          <div className="text-sm text-gray-500 mb-4 text-center">
            Interactive 3D preview · rotate and inspect
          </div>
          <ThreeDBox />
          <p className="text-xs uppercase tracking-[0.4em] text-center text-gray-400 mt-4">
            Scratch · Reveal · Authenticate
          </p>
        </div>
      </div>
    </div>
  );
};

