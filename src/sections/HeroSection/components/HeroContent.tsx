import { HeroButton } from "@/sections/HeroSection/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="caret-transparent grid grid-cols-[100%] grid-rows-[repeat(3,min-content)_1fr] min-h-[833px] w-full">
      <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] break-words w-[425px] mt-[232px] mb-4 left-[18px]">
        <h1 className="text-yellow-300 text-[75px] caret-transparent leading-[82.5px] break-words pointer-events-auto font-oswald_medium">
          <span className="caret-transparent break-words">
            <span className="caret-transparent break-words">
              <span className="caret-transparent tracking-[-1.5px] break-words">
                <span className="caret-transparent break-words">
                  REACH YOUR
                </span>
              </span>
            </span>
          </span>
          <br className="caret-transparent break-words" />
          <span className="caret-transparent break-words">
            <span className="caret-transparent break-words">
              <span className="caret-transparent tracking-[-1.5px] break-words">
                MAXIMUM 
              </span>
            </span>
          </span>
          <br className="caret-transparent break-words" />
          <span className="caret-transparent break-words">
            <span className="caret-transparent break-words">
              <span className="caret-transparent tracking-[-1.5px] break-words">
                <span className="caret-transparent break-words">CAPACITY</span>
              </span>
            </span>
          </span>
        </h1>
      </div>
      <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start ml-[calc(50%_-_490px)] break-words w-[321px] mb-[39px] left-[18px]">
        <p className="text-white text-[17px] caret-transparent leading-[25.5px] break-words pointer-events-auto font-avenir_lt_w01_35_light1475496">
          <span className="caret-transparent tracking-[0.51px] break-words">
            Go further than you thought with AR supplements.
          </span>
        </p>
      </div>
      <HeroButton />
      <div
        role="region"
        aria-label="Slideshow"
        className="relative self-start box-border caret-transparent grid col-end-2 col-start-1 row-end-5 row-start-1 h-[594px] justify-self-start ml-[calc(50%_-_490px)] min-h-[50px] pointer-events-auto w-[530px] mt-[140px] mb-2.5 left-[459px]"
      >
        <div className="absolute shadow-[rgba(0,0,0,0.6)_0px_0px_0px_0px] caret-transparent pointer-events-none inset-0"></div>
        <div className="absolute caret-transparent col-end-1 col-start-1 row-end-1 row-start-1 h-full w-full overflow-clip">
          <div className="static caret-black h-auto w-auto md:absolute md:aspect-auto md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
        </div>
      </div>
    </div>
  );
};
