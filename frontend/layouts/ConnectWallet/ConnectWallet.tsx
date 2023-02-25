import React, { useContext } from "react";
import { WalletContext } from "../../contexts/WalletContext";
import { WalletType } from "../../type";

const styles = {
    connectWallet: `flex items-center justify-center text-center rounded-[5px] font-[400] font-[] h-[40px] w-[131.61px] py-[16px] text-[#ffffff] bg-[#00a88e] hover:bg-[#0d6d5f]`,
};

type Props = {
    connectWallet: () => void;
};

const ConnectWallet = function ({ connectWallet }: Props) {
    const { connected } = useContext<WalletType>(WalletContext);

    if (!connected) {
        return (
            <div>
                <button
                    onClick={() => connectWallet()}
                    className={styles.connectWallet}
                >
                    Connect Wallet
                </button>
            </div>
        );
    }

    return (
        <button
            // onClick={handleShowInformation}
            className="inline-flex items-center justify-center relative select-none appearance-none rounded-md font-semibold h-[44px] w-[67px] px-[16px] bg-[#EDF2F7]"
        >
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WFnA54h3YI02YzQ4_BZlORyUh6xR8rpdRELLi03m&s"
                alt=""
                className="w-[35px] h-[35px]"
            />
            {/* {showInformation && <InformationAccount />} */}
        </button>
    );
};

export default ConnectWallet;
