import { Link } from "react-router-dom";

export const ContactContent = () => {
  return (
    <div className="caret-transparent grid grid-cols-[100%] grid-rows-[repeat(3,min-content)_1fr] min-h-[850px] w-full">
      <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto w-[695px] mt-[170px] mb-2.5 left-[133px]">
        <div className="absolute caret-transparent border-yellow-300 border-2 border-solid inset-0"></div>
        <div className="relative caret-transparent pointer-events-none w-[695px]">
          <div className="caret-transparent grid grid-cols-[100%] grid-rows-[1fr] w-full">
            <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-[315px] justify-self-start pointer-events-auto w-[682px] my-2 left-1.5">
              <div className="box-border caret-transparent h-full w-full overflow-hidden">
                <img
                  sizes="682px"
                  src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/50ff00_1cee536557d348d6a9507ff578527823~mv2.png"
                  alt="building.png"
                  className="aspect-[auto_682_/_315] caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover w-full overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 h-[62px] justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto w-[244px] mb-[18px] left-[368px]">
        <Link
          to="/contact"
          aria-label="CONTACT US"
          className="absolute text-blue-700 items-center bg-black box-border caret-transparent flex justify-center min-w-full w-max border-yellow-300 rounded-[100px] border-2 border-solid inset-0 before:accent-auto before:self-stretch before:caret-transparent before:text-blue-700 before:block before:grow before:text-[10px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:max-w-0 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-arial after:accent-auto after:self-stretch after:caret-transparent after:text-blue-700 after:block after:grow after:text-[10px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:max-w-0 after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-arial"
        >
          <span className="relative text-yellow-300 text-base caret-transparent block leading-[22.4px] text-nowrap font-avenir_lt_w01_35_light1475496">
            CONTACT US
          </span>
        </Link>
      </div>
      <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 justify-self-start ml-[calc(50%_-_490px)] break-words w-[635px] mb-2.5 left-[168px]">
        <p className="text-white text-[35px] caret-transparent break-words pointer-events-auto text-center font-oswald_medium">
          <span className="caret-transparent break-words">
            CONTACT FOR EXCLUSIVE UPDATES AND OFFERS FROM AR TEAM
          </span>
        </p>
      </div>
    </div>
  );
};
