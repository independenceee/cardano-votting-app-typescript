import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import ContextProvider from "../contexts";
import Layout from "../layouts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MeshProvider>
            <ContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ContextProvider>
        </MeshProvider>
    );
}
