import React from "react";
import Button from "../components/Button";
import CreateOption from "../apps/create/CreateOption";
type Props = {};

const styles = {
    container: `bg-[#f1f1f1] flex itemx-center justify-center`,
    wrapper: `bg-[#ffffff] max-w-[1152px] rounded-[25px] my-[10px] p-[40px]`,
    title: `mb-[24px] text-[#363636] font-[600] text-[1.25rem] leading-[1.25]`,
    wrapperOption: `grid grid-cols-3 gap-5 mobile:grid-cols-1 tablet:grid-cols-2`,
    button: ``
};

const CreateProvider = function ({}: Props) {
    const handleCheck = function () {};
    return (
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Create a ballot</h2>
                <div className={styles.wrapperOption}>
                    <CreateOption />
                    <CreateOption />
                    <CreateOption />
                </div>
                <div className="absolute">
                    <Button
                        path=""
                        styleContainer={styles.button}
                        title="Next"
                        handleOnclick={handleCheck}
                    />
                </div>
            </div>
        </main>
    );
};

export default CreateProvider;
