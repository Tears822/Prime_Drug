import { ContactContent } from "@/sections/ContactSection/components/ContactContent";

export const ContactSection = () => {
  return (
    <section className="relative self-start caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 justify-self-start min-w-[980px] pointer-events-auto w-full left-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative caret-transparent pointer-events-none w-full">
        <div className="caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] w-full">
          <section className="relative self-start caret-transparent flex col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-w-[980px] pointer-events-auto w-full left-0">
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
                  <div className="caret-transparent grid grid-cols-[100%] grid-rows-[1fr] w-full">
                    <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] break-words w-[660px] mt-[139px] mb-[33px] left-[159px]">
                      <h2 className="text-yellow-300 text-[40px] caret-transparent break-words pointer-events-auto text-center font-oswald_medium">
                        <span className="caret-transparent break-words">
                          Prime Laboratory
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative self-start caret-transparent flex col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-w-[980px] pointer-events-auto w-full left-0">
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
                        src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/34c59d_b9fa83d8e8294c95b39770bda70ab29f~mv2.jpg"
                        alt=""
                        className="aspect-[auto_980_/_850] caret-transparent h-[850px] max-w-full object-cover w-[980px] md:w-screen"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative caret-transparent pointer-events-none w-full">
                  <ContactContent />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
