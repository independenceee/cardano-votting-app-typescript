import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ConnectWallet from "../ConnectWallet";
import { AiFillHome } from "react-icons/ai";
import { MdHowToVote } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import Modal from "../../components/Modal";
import { ModalType } from "../../type";
import { ModalContext } from "../../contexts/ModaContext";

const styles = {
    container: `bg-[#eef0f4] font-poppin fixed top-0 left-0 right-0 h-[70px] bg-transparent flex items-center justify-between  px-[37px] py-0 leading-[16px] z-[3] border-b-[1px] border-b-solid border-[#00316b] shadow-lg`,
    logoContainer: `p-0 w-[80px] mt-[4px] max-h-[70px] text-[0px] inline-block`,
    logoImage: `block w-[100%]`,
    navbar: `flex items-center h-[100%] m-0 p-0 ml-[40px] sidebar:hidden`,
    navbarLink: `flex items-center py-0 px-[12px] mx-[10px] group`,
    navbarIcon: `h-[20px] min-w-[20px] w-[20px] z-auto group-hover:animate-bounce text-[#00316b]`,
    navbarContent: `text-[#00316b] text-[13px]  font-[700] leading-[1.08] tracking-[1.42px] py-[2px] px-0 whitespace-nowrap relative before:bg-[#00316b] before:rounded-tl-[0px] before:rounded-tr-[0px] before:rounded-bl-[4px] before:rounded-br-[4px] before:bottom-[-6px] before:content-[''] before:h-[2px] before:left-0 before:opacity-0 before:absolute before:right-0 before:origin-navbar before:transform before:scale-0 before:transition-all before:duration-300 before:invisible before:w-auto group-hover:before:transform group-hover:before:visible group-hover:before:opacity-100 group-hover:before:scale-100`,
};

type Props = {};

const Header = function ({}: Props) {
    const { isShowModal, handleShowModal, handleHiddenModal } =
        useContext<ModalType>(ModalContext);

    return (
        <header className={styles.container}>
            <Link href="/" className={styles.logoContainer}>
                {/* <Image className={styles.logoImage} src="" alt="" /> */}
                <span className="text-[30px]">I Vote</span>
            </Link>
            <nav className={styles.navbar}>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>HOME</span>
                </Link>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>
                        ALL VOTES
                    </span>
                </Link>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>
                        CONTACT
                    </span>
                </Link>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>POST</span>
                </Link>
                <Link className={styles.navbarLink} href="">
                    <span className={styles.navbarContent}>
                        LOGIN
                    </span>
                </Link>
            </nav>
            <ConnectWallet connectWallet={handleShowModal} />

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
