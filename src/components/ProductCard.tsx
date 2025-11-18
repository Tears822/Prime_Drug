export type ProductCardProps = {
    imageUrl: string;
    imageAlt: string;
    title: string;
    containerVariant: string;
    imageContainerVariant: string;
    titleTextFlow?: string;
  };
  
  export const ProductCard = (props: ProductCardProps) => {
    return (
      <div
        className={`absolute text-[11px] box-border caret-transparent h-[257.667px] align-top overflow-hidden font-helveticaneuew01_45ligh ${props.containerVariant}`}
      >
        <div
          aria-label="image"
          role="button"
          className="absolute caret-transparent h-px pointer-events-none w-px z-[-1] overflow-hidden"
        ></div>
        <div className="caret-transparent overflow-hidden">
          <div
            className={`relative caret-transparent h-[186.667px] overflow-hidden ${props.imageContainerVariant}`}
          >
            <div
              className={`absolute bg-no-repeat bg-cover caret-transparent h-[186.667px] object-cover overflow-hidden bg-center left-0 top-0 ${props.imageContainerVariant}`}
            >
              <picture className="caret-transparent">
                <img
                  src={props.imageUrl}
                  alt={props.imageAlt}
                  className={`absolute bg-no-repeat bg-cover caret-transparent h-[186.667px] object-cover overflow-hidden bg-center left-0 top-0 ${props.imageContainerVariant}`}
                />
              </picture>
            </div>
            <div
              className={`absolute items-end caret-transparent flex h-[186.667px] ${props.imageContainerVariant === "w-[141px]" ? "w-[141px]" : "w-[140px]"} left-0 top-0`}
            >
              <div
                className={`relative box-border caret-transparent h-[186.667px] ${props.imageContainerVariant === "w-[141px]" ? "w-[141px]" : "w-[140px]"} z-[15] overflow-hidden left-0 top-0`}
              ></div>
            </div>
          </div>
        </div>
        <div className="caret-transparent h-[71px]">
          <div className="box-border caret-transparent h-[71px] w-full overflow-hidden">
            <div className="caret-transparent h-full w-full">
              <div className="caret-transparent h-full">
                <div className="items-center box-border caret-transparent flex flex-col grow h-full text-center mb-[25px] py-[15px]">
                  <div className="caret-transparent w-full">
                    <div
                      className={`text-yellow-300 text-[13px] caret-transparent ${props.titleTextFlow || ""} leading-4 text-ellipsis overflow-hidden font-helvetica_w01_bold`}
                    >
                      <span className="caret-transparent">{props.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  