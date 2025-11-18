import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative self-start caret-transparent flex col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start mb-[-15px] min-w-[980px] pointer-events-auto w-full left-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative caret-transparent gap-x-0 flex w-full mx-auto">
        <div className="relative caret-transparent basis-[0%] grow-[980] w-full left-0 top-0">
          <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
            <div className="absolute bg-black caret-transparent h-full w-full top-0"></div>
            <div className="caret-transparent h-full">
              <div className="absolute caret-transparent block h-full w-full top-0">
                <img
                  src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/34c59d_efd6f6fd4e784fc99637a732f1984095~mv2.jpg"
                  alt=""
                  className="aspect-[auto_980_/_833] caret-transparent h-[833px] max-w-full object-cover w-[980px] md:w-screen"
                />
              </div>
            </div>
          </div>
          <div className="relative caret-transparent pointer-events-none w-full">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
};
