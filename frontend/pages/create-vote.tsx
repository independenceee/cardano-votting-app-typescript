import React from "react";
import FormSetting from "../apps/create-vote/FormSetting";
import FormOption from "../apps/create-vote/FormOption";

const styles = {
    container: `bg-[##f0f5fc] h-[100%] py-[40px] px-[27px]`,
};

type Props = {};

const CreateVote = function ({}: Props) {
    return (
        <div className={styles.container}>
            <FormSetting />
            <FormOption />
        </div>
    );
};

export default CreateVote;
