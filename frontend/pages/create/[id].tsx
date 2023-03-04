import React, { ChangeEvent, useState } from "react";

type Props = {};

const styles = {};

const CreateId = function ({}: Props) {
    const [image, setImage] = useState<string | null>(null!);
    const [filename, setFileName] =
        useState<string>("Choose the file");

    const handleChooseFile = function () {
        const fileImageElement: any =
            document.querySelector(".file__input");
        fileImageElement?.click();
    };

    return (
        <main>
            <div className="grid grid-cols-2 gap-[30px] p-[50px]">
                <div className="w-full h-auto p-[10px] rounded-[10px] border-[1px] border-solid border-blue-500">
                    <h2>Candidate 1</h2>
                    <div className="pt-10px flex justify-between items-center">
                        <div className="w-full">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="floating_outlined"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-blue-900 bg-transparent rounded-lg border-[1px] border-blue-500 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="floating_outlined"
                                    className="absolute text-sm text-blue-500 dark:text-blue-400 duration-300 transform translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Full Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="floating_outlined"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="floating_outlined"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Full Name
                                </label>
                            </div>
                        </div>
                        <div className="text-black h-full">
                            <form
                                onClick={() => handleChooseFile()}
                                className="flex flex-col justify-center items-center border-[2px] border-dashed border-[#1475cf] h-full w-[150px] cursor-pointer "
                            >
                                <input
                                    type="file"
                                    className="file__input"
                                    accept="image/*"
                                    hidden
                                    onChange={({
                                        target: { files },
                                    }) => {
                                        // files[0] &&
                                        //     setFileName(
                                        //         files[0].name,
                                        //     );
                                        if (files) {
                                            setImage(
                                                URL.createObjectURL(
                                                    files[0],
                                                ),
                                            );
                                        }
                                    }}
                                />
                                {image ? (
                                    <img
                                        className="w-full h-full object-cover"
                                        src={image}
                                        alt=""
                                    />
                                ) : (
                                    <>{filename}</>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CreateId;
