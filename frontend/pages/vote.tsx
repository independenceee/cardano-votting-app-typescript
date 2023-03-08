import React, { ChangeEvent, useState } from "react";

type Props = {};

const Vote = function ({}: Props) {
    const [checkValue, setCheckValue] = useState([]);

    const handleChange = function (
        event: ChangeEvent<HTMLInputElement>,
    ) {
        const { value, checked } = event.target;

        if(checked) {
            setCheckValue(value);
        }
    };
    return (
        <>
            <input
                type="checkbox"
                value="Yes"
                onChange={handleChange}
            />
            Yes
            <input
                type="checkbox"
                value="No"
                onChange={handleChange}
            />
            No
        </>
    );
};

export default Vote;
