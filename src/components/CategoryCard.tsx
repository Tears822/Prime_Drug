import { Link } from "react-router-dom";

export const CategoryCard = () => {
  return (
    <div className="relative caret-transparent basis-[0%] grow-[487] w-full my-[3px] left-0 top-0">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-black caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full">
          <div className="absolute caret-transparent block h-full w-full top-0">
            <img
              src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/34c59d_ff7c19e53cd64ac4a02e69a949a3b501~mv2.jpg"
              alt=""
              className="aspect-[auto_487_/_750] caret-transparent h-[750px] max-w-full object-cover w-[487px] md:w-[557px]"
            />
          </div>
        </div>
      </div>
      <div className="relative caret-transparent pointer-events-none w-full">
        <div className="caret-transparent grid grid-cols-[100%] grid-rows-[repeat(4,min-content)_1fr] min-h-[750px] w-full">
          <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_243.5px)] break-words w-[425px] mt-[83px] mb-8 left-[31px]">
            <h3 className="text-white text-[35px] caret-transparent break-words pointer-events-auto text-center font-oswald_medium">
              MUSCLE &amp; STRENGTH
            </h3>
          </div>
          <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-3 row-start-2 h-[62px] justify-self-start ml-[calc(50%_-_243.5px)] pointer-events-auto w-[244px] mb-2.5 left-[122px]">
            <Link
              to="/catalog"
              aria-label="TABLETS"
              className="absolute text-blue-700 items-center bg-black box-border caret-transparent flex justify-center min-w-full w-max border-yellow-300 rounded-[100px] border-2 border-solid inset-0 before:accent-auto before:self-stretch before:caret-transparent before:text-blue-700 before:block before:grow before:text-[10px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:max-w-0 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-arial after:accent-auto after:self-stretch after:caret-transparent after:text-blue-700 after:block after:grow after:text-[10px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:max-w-0 after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-arial"
            >
              <span className="relative text-yellow-300 text-base caret-transparent block leading-[22.4px] text-nowrap font-avenir_lt_w01_35_light1475496">
                TABLETS
              </span>
            </Link>
          </div>
          <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-5 row-start-4 justify-self-start ml-[calc(50%_-_243.5px)] break-words w-[445px] mb-[34px] left-[21px]">
            <h3 className="text-white text-[35px] caret-transparent break-words pointer-events-auto text-center font-oswald_medium">
              PERFORMANCE &amp; FOCUS
            </h3>
          </div>
          <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-6 row-start-5 h-[62px] justify-self-start ml-[calc(50%_-_243.5px)] pointer-events-auto w-[244px] mb-2.5 left-[122px]">
            <Link
              to="/catalog"
              aria-label="VIALS"
              className="absolute text-blue-700 items-center bg-black box-border caret-transparent flex justify-center min-w-full w-max border-yellow-300 rounded-[100px] border-2 border-solid inset-0 before:accent-auto before:self-stretch before:caret-transparent before:text-blue-700 before:block before:grow before:text-[10px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:max-w-0 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-arial after:accent-auto after:self-stretch after:caret-transparent after:text-blue-700 after:block after:grow after:text-[10px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:max-w-0 after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-arial"
            >
              <span className="relative text-yellow-300 text-base caret-transparent block leading-[22.4px] text-nowrap font-avenir_lt_w01_35_light1475496">
                VIALS
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
