import Head from "next/head";
import "@/styles/global.css";
import { NprogressProvider } from "@/context/NprogressContext";

export default function App({ Component, pageProps }) {
    return (
        <NprogressProvider>
            <Head>
                <title>NaNaNames - Generate pet names using AI</title>
            </Head>
            <Component {...pageProps} />
        </NprogressProvider>
    );
}
