import { CategoryCard } from "@/components/CategoryCard";

export const PurposeGrid = () => {
  return (
    <section className="relative self-start caret-transparent flex col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start min-w-[980px] pointer-events-auto w-[calc(100%_-_160px)] mx-auto left-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-yellow-300 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative caret-transparent gap-x-[3px] flex w-[calc(100%_-_6px)] mx-auto">
        <div className="relative caret-transparent basis-[0%] grow-[484] w-full my-[3px] left-0 top-0">
          <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
            <div className="absolute bg-yellow-200 caret-transparent h-full w-full top-0"></div>
            <div className="caret-transparent h-full">
              <div className="absolute caret-transparent block h-full opacity-70 w-full top-0">
                <img
                  src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/50ff00_a1b240c030d943d18d2da0dd538d0962~mv2.jpg"
                  alt="lab-quality-assurance-l.jpg"
                  className="aspect-[auto_484_/_750] caret-transparent h-[750px] max-w-full object-cover w-[484px] md:w-[554px]"
                />
              </div>
            </div>
          </div>
          <div className="caret-transparent min-h-[750px] pointer-events-none w-full">
            <div className="caret-transparent"></div>
          </div>
        </div>
        <CategoryCard />
      </div>
    </section>
  );
};
