import { ProductDisplay3D } from "@/components/ProductDisplay3D";

export const PackagingShowcase = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 blur-3xl bg-brand-blue/10 pointer-events-none" aria-hidden="true" />
      <div className="relative rounded-[36px] border border-yellow-700/40 bg-gradient-to-br from-[#b8b862] via-[#a0a049] to-[#8b8d3a] shadow-[0_40px_80px_rgba(0,0,0,0.4)] p-8">
        <div className="text-lg font-semibold text-gray-900 mb-6 text-center">
          NPP 100 - Nandrolone Phenylpropionate
        </div>
        <ProductDisplay3D liquidColor="#a78bfa" productName="NPP 100" />
        <p className="text-sm uppercase tracking-[0.4em] text-center text-gray-700 mt-6">
          Premium Pharmaceutical Grade
        </p>
      </div>
    </div>
  );
};

