import { ProductGrid } from "@/sections/FeaturedProducts/components/ProductGrid";

export const FeaturedProducts = () => {
  return (
    <section className="relative self-start caret-transparent flex col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start min-w-[980px] pointer-events-auto w-full mb-2.5 left-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative caret-transparent gap-x-0 flex w-full mx-auto">
        <div className="relative caret-transparent basis-[0%] grow-[980] w-full left-0 top-0">
          <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
            <div className="absolute bg-black caret-transparent h-full w-full top-0"></div>
            <div className="caret-transparent h-full"></div>
          </div>
          <div className="relative caret-transparent pointer-events-none w-full">
            <div className="caret-transparent grid grid-cols-[100%] grid-rows-[repeat(2,min-content)_1fr] w-full">
              <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] break-words w-[519px] mb-2.5 left-[210px]">
                <h2 className="text-yellow-300 text-[40px] caret-transparent break-words pointer-events-auto text-center font-oswald_medium">
                  FEATURED PRODUCTS
                </h2>
              </div>
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
