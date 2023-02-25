export type Balance = {
    quantity: number;
    unit: string;
};

export type WalletType = {
    connect: (walletName: string) => Promise<void>;
    disconnect: () => void;
    connected: boolean;
    connectWallet: (walletName: string) => Promise<void>;
    disconnectWallet: () => Promise<void>;
    balance: Balance[];
    address: string;
};

export type ModalType = {
    isShowModal: boolean;
    handleHiddenModal: () => void;
    handleShowModal: () => void;
};
