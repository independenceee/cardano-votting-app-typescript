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

    const handleRemoteFeild = function (index: any) {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const hanleSubmit = function () {
        console.log(inputList);
    };

    return (
        <main>
            <div>
                {inputList.map((input, index) => {
                    return (
                        <div>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) =>
                                    handleInputChange(e, index)
                                }
                            />
                            {inputList.length !== 1 && (
                                <button
                                    onClick={() =>
                                        handleRemoteFeild(index)
                                    }
                                >
                                    -
                                </button>
                            )}
                            {inputList.length - 1 === index && (
                                <button onClick={handleAddfeild}>
                                    +
                                </button>
                            )}
                        </div>
                    );
                })}

                <button onClick={hanleSubmit}>Submit</button>
            </div>
        </main>
    );
};

export default Create;
