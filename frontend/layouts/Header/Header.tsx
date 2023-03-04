import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { WalletContext } from "../../contexts/WalletContext";
import { WalletType } from "../../type";

const styles = {
    header: `sticky top-0 right-0 left-0 h-[70px] bg-[#D7D9DD] flex items-center justify-between py-0 px-[36px] z-[3] tracking-[16px] shadow-sm`,
    logo: `p-0 w-[80px] mt-[4px] max-h-[70px] text-0 inline-block`,
    logoImage: `block w-full`,
    navbar: `flex items-center flex-nowrap flex-row h-full justify-end m-0 p-0 relative ml-[25px] mr-auto`,
    navbarLink: `flex items-center py-0 px-[12px] mx-[10px] group`,
    navbarIcon: `h-[20px] min-w-[20px] w-[20px] z-auto group-hover:animate-bounce text-[#00316b]`,
    navbarContent: `text-[#00316b] text-[13px]  font-[700] leading-[1.08] tracking-[1.42px] py-[2px] px-0 whitespace-nowrap relative before:bg-[#00316b] before:rounded-tl-[0px] before:rounded-tr-[0px] before:rounded-bl-[4px] before:rounded-br-[4px] before:bottom-[-6px] before:content-[''] before:h-[2px] before:left-0 before:opacity-0 before:absolute before:right-0 before:origin-navbar before:transform before:scale-0 before:transition-all before:duration-300 before:invisible before:w-auto group-hover:before:transform group-hover:before:visible group-hover:before:opacity-100 group-hover:before:scale-100`,
};

type Props = {};

const Header = function ({}: Props) {
    const {
        connected,
        isShowModal,
        handleShowModal,
        handleHiddenModal,
    } = useContext<WalletType>(WalletContext);
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href="/">
                <Image className={styles.logoImage} src="" alt="" />
            </Link>
            <nav className={styles.navbar}>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>Home</span>
                </Link>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>
                        All ballot
                    </span>
                </Link>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>
                        Create vote
                    </span>
                </Link>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>
                        Contact
                    </span>
                </Link>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>
                        Login
                    </span>
                </Link>
            </nav>
            {!connected ? (
                <Button
                    title="Connect Wallet"
                    handleOnclick={handleShowModal}
                    styleContainer="text-[white] rounded-[8px] !font-[600] px-[12px] py-[8px] bg-gradient-to-r from-[#00b1ff] to-[#0832d3]"
                    path={null}
                />
            ) : (
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
            )}

            {isShowModal && (
                <Modal
                    showModal={handleShowModal}
                    hiddenModal={handleHiddenModal}
                />
            )}
        </header>
    );
};

export default Header;
