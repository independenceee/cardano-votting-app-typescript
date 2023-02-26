import React, { memo } from "react";
import Action from "./Action";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
type Props = {};

const styles = {
    container: ``,
    formGroup: ``,
    formTitle: ``,
    formInput: ``,
    formMain: ``,
    formDescription: ``,
};
const FormSetting = function ({}: Props) {
    return (
        <div className={styles.container}>
            <div>
                <div className="uppercase font-[600] text-[1rem] text-[#06246b] mb-[10px] leading-[1.2rem] outline-none">
                    Title or main question
                </div>
                <main className="flex items-center justify-between">
                    <section className="flex-1">
                        <div className="">
                            <input
                                type="text"
                                className="px-[10px] flex-1 w-full py-[4px] text-[#687281] text-[14px] outline-none border-[1px] border-solid border-[#9EDFFF]"
                            />
                        </div>
                        <div>
                            <input
                                placeholder="Description"
                                type="text"
                                className={styles.formDescription}
                            />
                        </div>
                    </section>
                    <section>
                        <div>
                            <input type="file" />
                        </div>
                    </section>
                </main>
            </div>
            <div>
                <label>NAME OF THE ORGANIZATION</label>
                <input type="text" />
            </div>
            <main className="flex items-center">
                <Action
                    title="ballot type"
                    Icon={AiOutlineCheckSquare}
                    description="Choose how voters will vote"
                />
                <Action
                    title="ballot type"
                    Icon={FaHandsHelping}
                    description="Choose how voters will vote"
                />
                <Action
                    title="ballot type"
                    Icon={AiOutlineClockCircle}
                    description="Choose how voters will vote"
                />
            </main>
            <h3>Option</h3>
            
        </div>
    );
};

export default memo(FormSetting);
