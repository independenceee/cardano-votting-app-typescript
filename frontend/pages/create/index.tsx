import React, { ChangeEvent, useState } from "react";

type Props = {};



const Create = function ({}: Props) {
    const [inputList, setInputList] = useState<Array<any>>([
        {
            name: "",
        },
    ]);

    const handleInputChange = function (
        e: ChangeEvent<HTMLInputElement>,
        index: number,
    ) {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };
    const handleAddfeild = function () {
        setInputList([...inputList, { name: "" }]);
    };

    const handleRemoteFeild = function () {};

    return (
        <main>
            <div>
                {inputList.map((input, index: number) => {
                    return (
                        <div>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) =>
                                    handleInputChange(e, index)
                                }
                            />
                            <span>-</span>
                            <span onClick={handleAddfeild}>+</span>
                        </div>
                    );
                })}

                <button>Submit</button>
            </div>
        </main>
    );
};

export default Create;
