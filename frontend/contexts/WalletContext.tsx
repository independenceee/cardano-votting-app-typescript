import React, { createContext, ReactNode, useState } from "react";
import { useWallet } from "@meshsdk/react";
type Props = {
    children: ReactNode;
};

type Balance = {
    quantity: number;
    unit: string;
};

type WalletType = {
    connect: (walletName: string) => Promise<void>;
    disconnect: () => void;
    connected: boolean;
    connectWallet: (walletName: string) => Promise<void>;
    disconnectWallet: () => Promise<void>;
    balance: Balance[];
    address: string;

    isShowModal: boolean;
    handleHiddenModal: () => void;
    handleShowModal: () => void;
};

export const WalletContext = createContext<WalletType>(null!);

const WalletProvider = function ({ children }: Props) {
    const { wallet, connect, connected, disconnect } = useWallet();
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [address, setAddress] = useState<string>("");
    const [balance, setBalance] = useState<Array<Balance>>([]);


    

    const connectWallet = async function (walletName: string) {
        try {
            if (!connected) {
                await connect(walletName);
                await setIsShowModal(false);
                if (connected) {
                    const balance = await wallet.getBalance();
                    setBalance(balance);
                    const address = await wallet.getChangeAddress();
                    setAddress(address);
                    console.log("re-render");
                }
            } else {
                await setIsShowModal(false);
            }
        } catch (error) {
            throw error;
        }
    };

    const disconnectWallet = async function () {
        try {
            if (!connected) {
                return;
            }
            await disconnect();
        } catch (error) {
            console.log(error);
        }
    };

    const handleShowModal = function () {
        setIsShowModal(true);
    };

    const handleHiddenModal = function () {
        setIsShowModal(false);
    };

    return (
        <WalletContext.Provider
            value={{
                connect,
                disconnect,
                connected,
                connectWallet,
                disconnectWallet,
                balance,
                address,
                isShowModal,
                handleShowModal,
                handleHiddenModal,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export default WalletProvider;
