import Link from "next/link";
import React from "react";

const styles = {
    footer: `mt-[0] bg-[#041438] h-[200px] w-full text-[#f5f5f5] px-[50px] py-[30px] z-0 flex items-center justify-center`,
};

const Footer = function () {
    return (
        <footer className={styles.footer}>
            <div className="flex items-center justify-between h-full text-[16px] min-w-[1152px]">
                <div>
                    <p className="font-[700]">Community</p>
                    <div className="mt-[10px] flex flex-col leading-[40px]">
                        <Link href="">
                            <span className="inlineFooter">
                                Telegram
                            </span>
                        </Link>
                        <Link href="">
                            <span className="inlineFooter">
                                Youtube{" "}
                            </span>
                        </Link>
                        <Link href="">
                            <span className="inlineFooter">
                                Github
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <p className="font-[700]">More</p>
                    <div className="mt-[10px] flex flex-col leading-[40px]">
                        <Link href="">
                            <span className="inlineFooter">Blog</span>
                        </Link>
                        <Link href="">
                            <span className="inlineFooter">
                                About us
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col shrink-0 gap-[10px] ">
                    <img
                        className="w-[120px] h-[120px] rounded-[3px]"
                        src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bee5964c.png&w=128&q=75"
                        alt=""
                    />
                    <Link
                        href=""
                        className="cursor-pointer text-center"
                    >
                        <span className="inlineFooter">
                            Home page
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
