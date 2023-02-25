import React, { createContext, ReactNode, useState } from "react";
import { ModalType } from "../type";

type Props = {
    children: ReactNode;
};

export const ModalContext = createContext<ModalType>(null!);

const ModalProvider = function ({ children }: Props) {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const handleShowModal = function () {
        setIsShowModal(true);
    };

    const handleHiddenModal = function () {
        setIsShowModal(false);
    };

    return (
        <ModalContext.Provider
            value={{
                isShowModal,
                handleHiddenModal,
                handleShowModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
