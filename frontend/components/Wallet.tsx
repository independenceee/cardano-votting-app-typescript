import React from "react";
import Image from "next/image";

const styles = {
    wrapperWallet: `w-[400px] h-[62px] rounded-md border-[1px] border-solid border-blue-200 mb-[12px] shadow-product flex items-center  px-[20px] py-[10px] uppercase hover:bg-[rgba(0,0,0,0.2)] cursor-pointer`,
    imageWallet: `h-[40px] w-[40px] z-[200] bg-white p-[2px] rounded-sm`,
    titleWallet: `ml-[16px] text-[18px] font-[700]`,
};

type Props = {
    name: string;
    icon: string;
    connectWallet: () => Promise<void>;
};

const Wallet = function ({ name, icon, connectWallet }: Props) {
    return (
        <div onClick={connectWallet} className={styles.wrapperWallet}>
            <img
                src={icon}
                alt="Wallet"
                className={styles.imageWallet}
            />
            <div className={styles.titleWallet}>
                {name} <span> WALLET</span>
            </div>
        </div>
    );
};

export default Wallet;
