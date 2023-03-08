import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
type Props = {};

const About = function ({}: Props) {
    return (
        <div className="w-full h-[290px] rounded-[10px] bg-[#97DBAE] shadow-home cursor-pointer overflow-hidden relative transition-all duration-[250ms] ease-linear border-[3px] border-solid border-[rgba(249, 249, 249, 0.1)] hover:shadow-homeHover transform hover:scale-[1.05] hover:border-[rgba(249, 249, 249, 0.8)] group">
            <div className="p-[12px] h-full grid grid-cols-1 content-between">
                <div className="flex justify-between">
                    <p className="w-[35%]">DISCOVERY OUR HISTORY</p>
                    <div>
                        <BsArrowUpRight className="font-bold text-[24px] group-hover:animate-ping" />
                    </div>
                </div>
                <div>
                    <h1 className="font-[600] text-[50px]">
                        About Us
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default About;
