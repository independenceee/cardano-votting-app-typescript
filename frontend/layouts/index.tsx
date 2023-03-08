import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
    children: ReactNode;
};

const Layout = function ({ children }: Props) {
    return (
        <div className="bg-[#ffffff]">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
