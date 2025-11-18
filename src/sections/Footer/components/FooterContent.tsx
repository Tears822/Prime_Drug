import { Link } from "react-router-dom";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <section className="relative self-start caret-transparent flex col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-w-[980px] pointer-events-auto w-[calc(100%_-_336px)] mt-px mb-[11px] mx-auto left-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative caret-transparent gap-x-0 flex w-full mx-auto">
        <div className="relative caret-transparent basis-[0%] grow-[245] w-full left-0 top-0">
          <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
            <div className="absolute bg-black caret-transparent h-full w-full top-0"></div>
            <div className="caret-transparent h-full"></div>
          </div>
          <div className="relative caret-transparent pointer-events-none w-full">
            <div className="caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] min-h-[348px] w-full">
              <FooterLogo />
              <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start ml-[calc(50%_-_122.5px)] break-words w-[244px] mb-2.5 left-0">
                <p className="text-white text-[21px] caret-transparent break-words pointer-events-auto font-avenir_lt_w01_35_light1475496">
                  <span className="caret-transparent break-words">PHARMA</span>
                </p>
                <p className="text-white text-[17px] caret-transparent break-words pointer-events-auto font-avenir_lt_w01_35_light1475496">
                  <span className="caret-transparent break-words">
                    <span className="caret-transparent break-words">
                      <span className="text-yellow-300 caret-transparent break-words">
                        <Link
                          to="/"
                          className="caret-transparent break-words"
                        >
                          H
                        </Link>
                      </span>
                    </span>
                  </span>
                  <span className="caret-transparent break-words">
                    <span className="caret-transparent break-words">
                      <span className="text-yellow-300 caret-transparent break-words">
                        <Link
                          to="/"
                          className="caret-transparent break-words"
                        >
                          IGH
                        </Link>
                      </span>
                    </span>
                  </span>
                </p>
                <p className="text-white text-[17px] caret-transparent break-words pointer-events-auto font-avenir_lt_w01_35_light1475496">
                  <span className="caret-transparent break-words">
                    <span className="caret-transparent break-words">
                      <span className="text-yellow-300 caret-transparent break-words">
                        PERFORMANCE 
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterColumn
          title="Menu"
          titleVariant="w-[146px] left-[50px]"
          linksContainerVariant="min-h-[42px] w-[77px] left-[50px]"
          links={[
            { text: "Home", href: "/" },
            { text: "About Us", href: "/about" },
            { text: "Contact", href: "/contact" },
          ]}
        />
        <FooterColumn
          title="Catalog"
          titleVariant="w-[121px] left-6"
          linksContainerVariant="w-[197px] left-6"
          links={[
            { text: "Catalog", href: "/catalog" },
            { text: "Vials\u00A0", href: "/catalog" },
            { text: "Tablets", href: "/catalog" },
          ]}
        />
        <FooterColumn
          title="Authentication "
          titleVariant="min-h-[7px] w-[244px] left-0"
          linksContainerVariant="w-[244px] left-0"
          links={[
            { text: "\u200B" },
            {
              text: "Product  Authentication  ",
              href: "/productauthentication",
            },
          ]}
        />
      </div>
    </section>
  );
};
