import { Link } from "react-router-dom";

export const BrandName = () => {
  return (
    <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_97.5px)] break-words w-[155px] mt-[59px] mb-2.5 left-[77px]">
      <p className="text-white text-[26px] caret-transparent break-words pointer-events-auto font-avenir_lt_w01_35_light1475496">
        <Link
          to="/"
          className="caret-transparent break-words"
        >
          <span className="caret-transparent break-words">
            <span className="caret-transparent break-words">
              <span className="caret-transparent break-words">PHARMA</span>
            </span>
          </span>
        </Link>
      </p>
    </div>
  );
};
