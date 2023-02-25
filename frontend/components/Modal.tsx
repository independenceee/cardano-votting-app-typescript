import React, { useContext } from "react";
import { useWalletList } from "@meshsdk/react";
import { AiOutlineClose } from "react-icons/ai";
import Wallet from "../layouts/ConnectWallet/Wallet";
import { WalletType } from "../type";
import { WalletContext } from "../contexts/WalletContext";
type Props = {
    showModal: () => void;
    hiddenModal: () => void;
};

const styles = {
    container: `fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center`,
};

const Modal = function ({ showModal, hiddenModal }: Props) {
    const wallets = useWalletList();

    const { connectWallet } = useContext<WalletType>(WalletContext);

    return (
        <div className={styles.container}>
            <div
                className="absolute  w-full h-full bg-[rgba(0,0,0,0.5)]"
                onClick={() => hiddenModal()}
            ></div>
            <div className="w-[448px] z-[50] bg-white rounded-lg">
                <header className="flex items-center justify-between px-[24px] py-[16px]">
                    <h2 className="font-bold text-[20px] ">
                        Select wallet to connect
                    </h2>
                    <div
                        onClick={() => hiddenModal()}
                        className="font-bold text-[20px] w-[32px] h-[32px] cursor-pointer flex items-center justify-center rounded-lg hover:bg-[rgba(0,0,0,0.06)]"
                    >
                        <AiOutlineClose />
                    </div>
                </header>
                <div className="pt-[8px] pb-[40px] px-[24px]">
                    {wallets.map(function (wallet, index) {
                        return (
                            <Wallet
                                connectWallet={() =>
                                    connectWallet(wallet.name)
                                }
                                key={index}
                                name={wallet.name}
                                icon={wallet.icon}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Modal;
