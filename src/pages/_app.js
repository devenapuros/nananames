import "@/styles/global.css";
import { NprogressProvider } from "@/context/NprogressContext";

export default function App({ Component, pageProps }) {
    return (
        <NprogressProvider>
            <Component {...pageProps} />
        </NprogressProvider>
    );
}
