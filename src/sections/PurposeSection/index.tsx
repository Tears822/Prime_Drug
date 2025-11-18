import { PurposeGrid } from "@/sections/PurposeSection/components/PurposeGrid";

export const PurposeSection = () => {
  return (
    <section className="relative self-start caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start min-w-[980px] pointer-events-auto w-full left-0">
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
                    <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] break-words w-[635px] mt-[141px] mb-[57px] left-[168px]">
                      <h2 className="text-yellow-300 text-[40px] caret-transparent break-words pointer-events-auto text-center font-oswald_medium">
                        WHAT’S YOUR PURPOSE?
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PurposeGrid />
        </div>
      </div>
    </section>
  );
};
