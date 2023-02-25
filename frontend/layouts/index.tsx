import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
    children: ReactNode;
};

const Layout = function ({ children }: Props) {
    return (
        <>
            <Header />
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
