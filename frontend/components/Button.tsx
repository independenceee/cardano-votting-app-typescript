import React from "react";

type Props = {
    title: string;
    styleContainer: string;
    handleOnclick: () => void;
    path: string | null;
};

const Button = function ({
    title,
    styleContainer,
    handleOnclick,
    path,
}: Props) {
    return (
        <button onClick={handleOnclick} className={styleContainer}>
            <span>{title}</span>
        </button>
    );
};

export default Button;
