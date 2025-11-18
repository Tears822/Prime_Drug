import { Logo } from "@/components/Logo";
import { BrandName } from "@/components/BrandName";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { SearchBar } from "@/components/SearchBar";

export const Navbar = () => {
  return (
    <section className="relative self-start caret-transparent flex col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-w-[980px] pointer-events-auto w-full mb-[15px] left-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative caret-transparent gap-x-0 flex w-full mx-auto">
        <div className="relative caret-transparent basis-[0%] grow-[195] w-full left-0 top-0">
          <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
            <div className="absolute caret-transparent h-full w-full top-0"></div>
            <div className="caret-transparent h-full"></div>
          </div>
          <div className="relative caret-transparent pointer-events-none w-full">
            <div className="caret-transparent grid grid-cols-[100%] grid-rows-[1fr] min-h-[187px] w-full">
              <Logo />
              <BrandName />
            </div>
          </div>
        </div>
        <div className="relative caret-transparent basis-[0%] grow-[785] w-full left-0 top-0">
          <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
            <div className="absolute caret-transparent h-full w-full top-0"></div>
            <div className="caret-transparent h-full"></div>
          </div>
          <div className="relative caret-transparent pointer-events-none w-full">
            <div className="caret-transparent grid grid-cols-[100%] grid-rows-[1fr] min-h-[187px] w-full">
              <DesktopMenu />
              <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(100%_-_785px)] pointer-events-auto w-[170px] mt-[49px] mb-2.5 left-[538px]">
                <div className="relative caret-transparent pointer-events-none w-[170px]">
                  <div className="caret-transparent grid grid-cols-[100%] grid-rows-[1fr] w-full">
                    <SearchBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
