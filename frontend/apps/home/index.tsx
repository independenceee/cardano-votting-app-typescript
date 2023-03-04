import React from "react";
import Ballots from "./Ballots";
import Others from "./Others";

const styles = {
    container: `grid grid-cols-2 p-[36px] gap-[25px] `,
};

type Props = {};

const Main = function () {
    return (
        <main className={styles.container}>
            <Ballots />
            <Others />
        </main>
    );
};

export default Main;
