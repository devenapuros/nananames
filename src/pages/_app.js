import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>NaNaNames - Pet Names using AI</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
