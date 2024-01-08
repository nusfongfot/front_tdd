import ResponsiveAppBar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    (() => {
      if (typeof window !== "undefined") {
        sessionStorage.getItem("dataInfo");
      }
    })();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
