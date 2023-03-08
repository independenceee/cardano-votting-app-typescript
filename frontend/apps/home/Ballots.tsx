import React from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import {useRouter} from "next/router";

type Props = {};

const styles = {
    container: `w-full h-[608px] bg-[#75BDE0] text-[#eef0f4] rounded-[10px] shadow-home cursor-pointer overflow-hidden relative transition-all duration-[250ms] ease-linear border-[3px] border-solid border-[rgba(249, 249, 249, 0.1)] hover:shadow-homeHover transform hover:scale-[1.05] hover:border-[rgba(249, 249, 249, 0.8)]`,
};

const Ballots = function ({}: Props) {
    const router = useRouter();

    


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
            <div className="p-[12px] h-full">
                <div className="p-[12px] h-full grid grid-cols-1 content-between group">
                    <div className="flex justify-between">
                        <p className="w-[35%]">HAVE SOME QUESTION</p>
                        <div>
                            <FaLocationArrow className="font-bold text-[24px] group-hover:animate-pulse" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-[600] text-[50px]">
                            All Ballot
                        </h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Ballots;
