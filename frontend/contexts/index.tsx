import React, { ReactNode } from "react";
import WalletProvider from "./WalletContext";
import ModalProvider from "./ModalContext";

type Props = {
    children: ReactNode;
};

const ContextProvider = function ({ children }: Props) {
    return (
        <WalletProvider>
            <ModalProvider>{children}</ModalProvider>
        </WalletProvider>
    );
};

export default ContextProvider;
