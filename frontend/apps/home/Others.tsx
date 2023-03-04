import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Create from "./components/Create";

const styles = {
    container: `w-full h-[608px] text-[#eef0f4] rounded-[10px]`,
};

type Props = {};

const Others = function ({}: Props) {
    return (
        <motion.div
            initial={{
                x: 500,
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
            <div className="grid grid-cols-1 gap-[25px]">
                <Create />
                <div className="grid grid-cols-2 gap-[25px]">
                    <About />
                    <Contact />
                </div>
            </div>
        </motion.div>
    );
};

export default Others;
