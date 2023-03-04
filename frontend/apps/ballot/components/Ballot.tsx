import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const styles = {};

const Product = function () {
    const router = useRouter();

    return (
        <div className="w-[auto] h-[473.9px] flex flex-col overflow-hidden bg-[#ffffff] cursor-pointer border-[2px] border-transparent py-[20px] px-[10px] rounded-[12px] transition-all shadow-product hover:border-[2px] hover:border-blue-400 hover:border-solid hover:transition hover:duration-500">
            <div className="">
                <span className="flex items-center justify-center">
                    <img
                        className="w-[280px] h-[258px]"
                        src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProduct1.ef8175c5.png&w=384&q=75"
                        alt=""
                    />
                </span>
            </div>
            <p className="mt-[0.75rem]">Bầu cử</p>
            <div className=" mt-[8px] flex items-center">
                <p className="mr-[8px] text-[#1A202C] font-[700] text-[15px]">
                    Start
                </p>
                <p className="mr-[12px] text-[#1A202C] text-[20px] font-[700]"></p>
                <span className="">
                    {/* <img
                        className=" w-[25px] h-[25px] mx-auto object-cover"
                        src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdaCoinSmall.ecf61ff1.png&w=32&q=75"
                        alt=""
                    /> */}
                    Hôm nay
                </span>
            </div>
            <div className="grid gap-[0.75rem] grid-cols-2 mt-[0.75rem] w-full">
                <button className="w-[auto] h-[40px] text-[#ffffff] rounded-[0.375rem] bg-[#ED8936] font-[400] py-0 px-[16px]">
                    Vote
                </button>
                <button className="w-[auto] h-[40px] text-[#ffffff] rounded-[0.375rem] bg-[#4299E1] font-[400] py-0 px-[16px]">
                    See result
                </button>
            </div>
        </div>
    );
};

export default Product;
