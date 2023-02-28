import React from "react";

type Props = {};

const styles = {
    text: `mb-[24px] text-[16px] text-[#4A4A4A]`,
};

const CreateOption = function ({}: Props) {
    return (
        <div className="w-auto h-[394px]  rounded-[8px] bg-[#f1f1f1]">
            <div className="bg-[#0d42bc] rounded-[8px] h-[59px] flex items-center justify-between px-[12px] py-[16px]">
                <h2 className="font-[600] text-[16px] text-[white]">
                    Simple - 1 ₳
                </h2>
                <div className=" bg-[#f1f1f1] w-[33px] h-[33px] rounded-sm"></div>
            </div>
            <div className="p-[24px]">
                <p className={styles.text}>
                    Create a ballot that anyone can vote on
                </p>
                <p className={styles.text}>
                    The results will be weighted based on the amount
                    of ADA held by the voter
                </p>
                <p className={styles.text}>
                    This is the most straightforward voting option and
                    open to the widest group of people
                </p>
            </div>
        </div>
    );
};

export default CreateOption;
