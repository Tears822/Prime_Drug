import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="relative self-start caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-w-[980px] pointer-events-auto w-full left-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative caret-transparent pointer-events-none w-full">
        <div className="caret-transparent grid grid-cols-[100%] grid-rows-[1fr] w-full">
          <section className="relative self-start caret-transparent flex col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-w-[980px] pointer-events-auto w-full left-0">
            <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
              <div className="absolute caret-transparent h-full w-full top-0"></div>
              <div className="caret-transparent h-full"></div>
            </div>
            <div className="relative caret-transparent gap-x-0 flex w-full mx-auto">
              <div className="relative caret-transparent basis-[0%] grow-[490] w-full left-0 top-0">
                <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
                  <div className="absolute bg-black caret-transparent h-full w-full top-0"></div>
                  <div className="caret-transparent h-full"></div>
                </div>
                <div className="relative caret-transparent pointer-events-none w-full">
                  <AboutContent />
                </div>
              </div>
              <div className="relative caret-transparent basis-[0%] grow-[490] w-full left-0 top-0">
                <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
                  <div className="absolute bg-slate-700 caret-transparent h-full w-full top-0"></div>
                  <div className="caret-transparent h-full">
                    <div className="absolute caret-transparent block h-full w-full top-0">
                      <img
                        src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/84770f_e58156816cbb4505a7a3388d6593def9~mv2.jpg"
                        alt=""
                        className="aspect-[auto_490_/_851] caret-transparent h-[851px] max-w-full object-cover w-[490px] md:w-[640px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent min-h-[851px] pointer-events-none w-full">
                  <div className="caret-transparent"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
