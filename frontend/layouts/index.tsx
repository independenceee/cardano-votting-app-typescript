import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
    children: ReactNode;
};

const Layout = function ({ children }: Props) {
    return (
        <div className="bg-[#eef0f4]">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
