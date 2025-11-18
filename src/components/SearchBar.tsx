export const SearchBar = () => {
    return (
      <div className="relative self-start caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 h-[41px] justify-self-start pointer-events-auto w-[170px] left-0">
        <div className="absolute text-white text-base box-border caret-transparent grid leading-[22.4px] min-h-full w-full border border-yellow-100 overflow-hidden rounded-[20px] border-solid top-0 font-avenir_lt_w01_35_light1475496">
          <div className="caret-transparent rounded-b-[20px]">
            <form
              role="search"
              className="box-border caret-transparent flex h-full w-full overflow-hidden"
            >
              <div className="items-center caret-transparent flex flex-row-reverse grow overflow-hidden">
                <div className="caret-transparent flex shrink-0 w-3"></div>
                <div className="text-yellow-300 caret-transparent flex">
                  <div className="caret-transparent shrink-0 h-[14.4px] max-h-[50px] max-w-[50px] min-h-3.5 min-w-3.5 w-[14.4px]">
                    <img
                      src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/icon-3.svg"
                      alt="Icon"
                      className="caret-transparent"
                    />
                  </div>
                </div>
                <div className="items-center caret-transparent flex h-full w-full overflow-hidden ml-3 mr-[42px]">
                  <div className="relative caret-transparent grow h-full overflow-hidden">
                    <div className="absolute caret-transparent flex flex-col justify-start inset-0">
                      <div className="relative caret-transparent flex basis-[0%] flex-col grow">
                        <input
                          name="q"
                          type="search"
                          placeholder="Search..."
                          aria-label="Search..."
                          value=""
                          className="bg-transparent box-border caret-transparent block basis-[0%] grow min-h-full text-ellipsis w-full px-0 py-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  aria-label="Search..."
                  type="submit"
                  className="text-black items-center bg-white/80 border-l-yellow-100 caret-transparent hidden h-full text-center px-3 py-0 border-r-0 border-y-0 border-l hover:bg-white"
                >
                  <div className="caret-transparent shrink-0 h-[14.4px] max-h-[50px] max-w-[50px] min-h-3.5 min-w-3.5 w-[14.4px]">
                    <img
                      src="https://c.animaapp.com/mi4ondmjmNNVhF/assets/icon-4.svg"
                      alt="Icon"
                      className="caret-transparent"
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  