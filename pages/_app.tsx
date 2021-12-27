import { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyle";

const app = ({ Component, pageProps }:AppProps) => {
    return (
        <>
        <GlobalStyles />
        <Component {...pageProps}/>
        </>
    );
};

export default app;
