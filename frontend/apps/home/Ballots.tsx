import React from "react";
import { motion } from "framer-motion";
type Props = {};

const styles = {
    container: `w-full h-[608px] bg-[#262626] text-[#eef0f4] rounded-[10px] shadow-home cursor-pointer overflow-hidden relative transition-all duration-[250ms] ease-linear border-[3px] border-solid border-[rgba(249, 249, 249, 0.1)] hover:shadow-homeHover transform hover:scale-[1.05] hover:border-[rgba(249, 249, 249, 0.8)]`,
};

const Ballots = function ({}: Props) {
    return (
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{ duration: 1.5 }}
            className={styles.container}
        >
            <div className="p-[12px]">
                <p className="text-[24px]">More Offers</p>
                <h1 className="text-[50px] mt-[30px]">
                    There is something else for you
                </h1>
                <div className=""></div>
            </div>
        </motion.div>
    );
};

export default Ballots;
