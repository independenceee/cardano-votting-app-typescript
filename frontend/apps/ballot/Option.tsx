import React, { useState, useEffect } from "react";
import axios from "axios";
import Ballot from "./components/Ballot";

const Option = function () {
    return (
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-cols-auto mt-[50px] p-[20px] gap-[1.5rem] ">
            <Ballot />
            <Ballot />
            <Ballot />
            <Ballot />
            <Ballot />
            <Ballot />
            <Ballot />
        </div>
    );
};

export default Option;
