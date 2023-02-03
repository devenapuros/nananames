import { createContext, useContext, useEffect } from "react";
import { Router } from "next/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const nprogressContext = createContext();

export const NprogressProvider = ({ children }) => {
    useEffect(() => {
        nprogress.configure({ showSpinner: false });
    }, []);

    const load = () => nprogress.start();
    const stop = () => nprogress.done();
    const set = (value) => nprogress.set(value);

    Router.events.on("routeChangeStart", load);
    Router.events.on("routeChangeComplete", stop);
    Router.events.on("routeChangeError", stop);

    return (
        <nprogressContext.Provider value={{ load, stop, set }}>
            {children}
        </nprogressContext.Provider>
    );
};

export const useNprogress = () => {
    const context = useContext(nprogressContext);
    if (!context) throw new Error("Missing NprogressProvider to use nprogress");
    return context;
};
