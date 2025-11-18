import { HeroSection } from "@/sections/HeroSection";
import { FeaturedProducts } from "@/sections/FeaturedProducts";
import { AboutSection } from "@/sections/AboutSection";
import { PurposeSection } from "@/sections/PurposeSection";
import { ContactSection } from "@/sections/ContactSection";

export const Main = () => {
  return (
    <main className="relative self-stretch caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 w-full left-0">
      <div className="relative caret-transparent h-full overflow-x-clip w-full left-0">
        <div className="caret-transparent grid grid-cols-[1fr] grid-rows-[1fr] h-full">
          <div className="relative self-stretch caret-transparent col-end-1 col-start-1 row-end-1 row-start-1 h-full justify-self-stretch min-h-10 left-0">
            <div className="absolute caret-transparent ml-[calc(50%_-_490px)] w-[980px] inset-0"></div>
            <div className="relative caret-transparent w-full">
              <div className="caret-transparent pointer-events-none">
                <div className="relative caret-transparent w-full">
                  <div className="box-border caret-transparent grid grid-cols-[100%] grid-rows-[repeat(3,min-content)_1fr] min-h-10 w-full">
                    <section className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-w-[980px] pointer-events-auto w-full left-0">
                      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
                        <div className="absolute caret-transparent h-full w-full top-0"></div>
                        <div className="caret-transparent h-full"></div>
                      </div>
                      <div className="relative caret-transparent flex pointer-events-none w-full">
                        <div className="caret-transparent grid grid-cols-[100%] grid-rows-[repeat(2,min-content)_1fr] mt-[-202px] min-h-[1597px] w-full">
                          <div className="absolute caret-transparent hidden left-[-123px] ml-[calc(50%_-_490px)] pointer-events-auto top-[872px]"></div>
                          <HeroSection />
                          <FeaturedProducts />
                          <div
                            role="region"
                            aria-label="Fetured Products"
                            className="relative self-start caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 h-[21px] justify-self-stretch mb-[-7px] text-nowrap w-full overflow-hidden left-0"
                          >
                            <div className="caret-transparent text-nowrap"></div>
                            <span className="caret-transparent hidden text-nowrap">
                              Fetured Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                    <AboutSection />
                    <PurposeSection />
                    <ContactSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
