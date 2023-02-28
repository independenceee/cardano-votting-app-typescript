import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
    children: ReactNode;
};

const Layout = function ({ children }: Props) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
