import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <div className="relative self-start caret-transparent block col-end-2 col-start-1 row-end-2 row-start-1 h-[50px] justify-self-start ml-[calc(100%_-_785px)] pointer-events-auto w-[530px] mt-11 mb-2.5 left-2">
      <nav
        aria-label="Site"
        className="absolute caret-transparent flex flex-col h-full w-full inset-0"
      >
        <ul className="absolute caret-transparent h-full list-none text-left text-nowrap w-full pl-0">
          <li className="relative text-base box-border caret-transparent inline-block h-[50px] leading-[22.4px] text-start text-nowrap w-[72px] font-proxima_n_w01_reg">
            <Link
              to="/"
              className="text-blue-700 caret-transparent inline-block h-full text-nowrap w-full"
            >
              <div className="caret-transparent text-nowrap px-[5px]">
                <div className="caret-transparent text-nowrap">
                  <p className="text-yellow-300 caret-transparent inline-block leading-[50px] text-nowrap px-2.5">
                    Home
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="relative text-base box-border caret-transparent inline-block h-[50px] leading-[22.4px] text-start text-nowrap w-[84px] font-proxima_n_w01_reg">
            <Link
              to="/catalog"
              className="text-blue-700 caret-transparent inline-block h-full text-nowrap w-full"
            >
              <div className="caret-transparent text-nowrap px-[5px]">
                <div className="caret-transparent text-nowrap">
                  <p className="text-white caret-transparent inline-block leading-[50px] text-nowrap px-2.5">
                    Catalog
                  </p>
                </div>
              </div>
            </Link>
            <button
              aria-label="More Catalog pages"
              className="absolute text-[13.3333px] bg-transparent caret-transparent block h-6 leading-[normal] text-center text-nowrap w-6 p-0 font-arial"
            >
              <img
                src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/icon-2.svg"
                alt="Icon"
                className="caret-transparent h-2.5 text-nowrap w-2.5"
              />
            </button>
          </li>
          <li className="relative text-base box-border caret-transparent inline-block h-[50px] leading-[22.4px] text-start text-nowrap w-[190px] font-proxima_n_w01_reg">
            <Link
              to="/productauthentication"
              className="text-blue-700 caret-transparent inline-block h-full text-nowrap w-full"
            >
              <div className="caret-transparent text-nowrap px-[5px]">
                <div className="caret-transparent text-nowrap">
                  <p className="text-white caret-transparent inline-block leading-[50px] text-nowrap px-2.5">
                    Product Authentication
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="relative text-base box-border caret-transparent inline-block h-[50px] leading-[22.4px] text-start text-nowrap w-[85px] font-proxima_n_w01_reg">
            <Link
              to="/contact"
              className="text-blue-700 caret-transparent inline-block h-full text-nowrap w-full"
            >
              <div className="caret-transparent text-nowrap px-[5px]">
                <div className="caret-transparent text-nowrap">
                  <p className="text-white caret-transparent inline-block leading-[50px] text-nowrap px-2.5">
                    Contact
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="relative text-base box-border caret-transparent inline-block h-[50px] leading-[22.4px] text-start text-nowrap w-[95px] font-proxima_n_w01_reg">
            <Link
              to="/about"
              className="text-blue-700 caret-transparent inline-block h-full text-nowrap w-full"
            >
              <div className="caret-transparent text-nowrap px-[5px]">
                <div className="caret-transparent text-nowrap">
                  <p className="text-white caret-transparent inline-block leading-[50px] text-nowrap px-2.5">
                    About Us
                  </p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <div className="caret-transparent hidden">
          Use tab to navigate through the menu items.
        </div>
      </nav>
    </div>
  );
};
