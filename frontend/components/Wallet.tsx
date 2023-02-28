import React from "react";
import Image from "next/image";

const styles = {
    wrapper: `w-[400px] h-[62px] rounded-md border-[1px] border-solid border-blue-200 mb-[12px] shadow-product flex items-center  px-[20px] py-[10px] uppercase hover:bg-[rgba(0,0,0,0.2)] cursor-pointer`,
    image: `h-[40px] w-[40px] z-[200] bg-white p-[2px] rounded-sm`,
    title: `ml-[16px] text-[18px] font-[700]`,
};

type Props = {
    name: string;
    icon: string;
    connectWallet: () => Promise<void>;
};

const Wallet = function ({ name, icon, connectWallet }: Props) {
    return (
        <div onClick={connectWallet} className={styles.wrapper}>
            <img src={icon} alt="Wallet" className={styles.image} />
            <div className={styles.title}>
                {name} <span> WALLET</span>
            </div>
        </div>
    );
};

export default Wallet;
