import React from "react";
import { FaLocationArrow } from "react-icons/fa";

type Props = {};

const Contact = function ({}: Props) {
    return (
        <div className="w-full h-[290px] rounded-[10px] bg-[#CDE4AD] shadow-home cursor-pointer overflow-hidden relative transition-all duration-[250ms] ease-linear border-[3px] border-solid border-[rgba(249, 249, 249, 0.1)] hover:shadow-homeHover transform hover:scale-[1.05] hover:border-[rgba(249, 249, 249, 0.8)]">
            <div className="p-[12px] h-full grid grid-cols-1 content-between group">
                <div className="flex justify-between">
                    <p className="w-[35%]">HAVE SOME QUESTION</p>
                    <div>
                        <FaLocationArrow className="font-bold text-[24px] group-hover:animate-pulse" />
                    </div>
                </div>
                <div>
                    <h1 className="font-[600] text-[50px]">
                        Contact Us
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;
