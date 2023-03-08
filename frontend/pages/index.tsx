import React from "react";
import Layout from "../layouts";
import About from "../apps/home/About";
import Main from "../apps/home";

type Props = {};

const Home = function ({}: Props) {
    return (
        <Layout>
            <Main />
            <About />
        </Layout>
    );
};

export default Home;
