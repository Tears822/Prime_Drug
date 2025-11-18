export type FooterBottomProps = {
    variant: string;
    text?: string;
    linkUrl?: string;
    linkText?: string;
    boldText?: string;
  };
  
  export const FooterBottom = (props: FooterBottomProps) => {
    return (
      <div
        className={`relative self-start caret-transparent col-end-2 col-start-1 row-end-4 row-start-3 justify-self-start ml-[calc(50%_-_490px)] break-words ${props.variant}`}
      >
        <p
          className={`text-yellow-300 text-sm caret-transparent break-words pointer-events-auto font-avenir_lt_w01_35_light1475496 ${props.variant === "left-[-396px] w-[510px] mb-4" ? "text-center" : "leading-[19.6px]"}`}
        >
          {props.variant === "left-[-396px] w-[510px] mb-4" ? (
            <span className="caret-transparent tracking-[0.7px] break-words">
              {props.text}
            </span>
          ) : (
            <span className="caret-transparent break-words">
              <span className="caret-transparent break-words font-helvetica_w01_roman">
                <span className="caret-transparent break-words">
                  <span className="caret-transparent break-words">
                    <span className="text-black caret-transparent break-words">
                      <span className="caret-transparent break-words">
                        <span className="text-white caret-transparent break-words">
                          <a
                            href={props.linkUrl}
                            className="caret-transparent break-words"
                          >
                            <span className="caret-transparent break-words">
                              <span className="caret-transparent break-words">
                                <span className="caret-transparent break-words">
                                  <span className="caret-transparent break-words">
                                    <span className="text-black caret-transparent break-words">
                                      <span className="caret-transparent break-words">
                                        <span className="text-white caret-transparent break-words">
                                          {props.linkText}
                                          <span className="font-bold caret-transparent break-words">
                                            {" "}
                                            {props.boldText}
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          )}
        </p>
      </div>
    );
  };
  