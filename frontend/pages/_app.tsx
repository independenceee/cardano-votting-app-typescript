import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import ContextProvider from "../contexts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MeshProvider>
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        </MeshProvider>
    );
}
