import React, { useState } from "react";

type Props = {};

const Option = function () {
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleChangeName = function (
        event: React.FormEvent<HTMLInputElement>,
    ) {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        setName(target?.value);
        console.log(name);
    };

    const handleChangeImage = function (
        event: React.FormEvent<HTMLInputElement>,
    ) {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        setImage(target?.files[0]);
        console.log(image);
    };

    const handleChangeDescription = function (
        event: React.FormEvent<HTMLInputElement>,
    ) {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        setDescription(target?.value);
        console.log(description);
    };

    return (
        <>
            <form>
                <label htmlFor="">name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChangeName}
                />
                <label>descripton</label>
                <input
                    type="text"
                    name="description"
                    onChange={handleChangeDescription}
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleChangeImage}
                />
            </form>
        </>
    );
};

export default Option;
