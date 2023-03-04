import React from "react";
import Layout from "../layouts";
import About from "../apps/home/About";
import Main from "../apps/home";

type Props = {};

const Home = function ({}: Props) {
    return (
        <main className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
            <Layout>
                <div className="snap-center">
                    <Main />
                </div>
                <div className="snap-center">
                    <About />
                </div>
            </Layout>
        </main>
    );
};

export default Home;
