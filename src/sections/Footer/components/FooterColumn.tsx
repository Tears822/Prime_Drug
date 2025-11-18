import { Link } from "react-router-dom";

export type FooterColumnProps = {
  title: string;
  titleVariant: string;
  linksContainerVariant: string;
  links: Array<{
    text: string;
    href?: string;
    className?: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="relative caret-transparent basis-[0%] grow-[245] w-full left-0 top-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-black caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative caret-transparent pointer-events-none w-full">
        <div className="caret-transparent grid grid-cols-[100%] grid-rows-[min-content_1fr] min-h-[348px] w-full">
          <div
            className={`relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_122.5px)] break-words mt-[90px] mb-3 ${props.titleVariant}`}
          >
            <p className="text-yellow-300 text-[21px] caret-transparent break-words pointer-events-auto font-oswald_medium">
              {props.title}
            </p>
          </div>
          <div
            className={`relative self-start caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 justify-self-start ml-[calc(50%_-_122.5px)] break-words mb-2.5 ${props.linksContainerVariant}`}
          >
            {props.links.map((link, index) => (
              <p
                key={index}
                className="text-white text-base caret-transparent leading-[30.4px] break-words pointer-events-auto font-avenir_lt_w01_35_light1475496"
              >
                {link.href ? (
                  <Link
                    to={link.href.replace("https://www.arpharma.net", "")}
                    className={
                      link.className || "caret-transparent break-words"
                    }
                  >
                    <span className="caret-transparent tracking-[0.48px] break-words">
                      {link.text}
                    </span>
                  </Link>
                ) : (
                  <span className="caret-transparent tracking-[0.48px] break-words">
                    {link.text}
                  </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
