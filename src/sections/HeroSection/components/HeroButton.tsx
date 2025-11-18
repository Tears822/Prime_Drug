import { Link } from "react-router-dom";

export const HeroButton = () => {
  return (
    <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 h-[62px] justify-self-start ml-[calc(50%_-_490px)] pointer-events-auto w-[244px] mb-2.5 left-[18px]">
      <Link
        to="/catalog"
        aria-label="SHOW PRODUCTS"
        className="absolute text-blue-700 items-center bg-black box-border caret-transparent flex justify-center min-w-full w-max border-yellow-300 rounded-[100px] border-2 border-solid inset-0 before:accent-auto before:self-stretch before:caret-transparent before:text-blue-700 before:block before:grow before:text-[10px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:max-w-0 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-arial after:accent-auto after:self-stretch after:caret-transparent after:text-blue-700 after:block after:grow after:text-[10px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:max-w-0 after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-arial"
      >
        <span className="relative text-yellow-300 text-base caret-transparent block leading-[22.4px] text-nowrap font-avenir_lt_w01_35_light1475496">
          SHOW PRODUCTS
        </span>
      </Link>
    </div>
  );
};
