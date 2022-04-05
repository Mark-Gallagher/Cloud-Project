import "../global.css";
import Layout from "../components/layout";
import { NextUIProvider } from "@nextui-org/react";
import { DataContextProvider } from "../store/data-store";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <DataContextProvider>
       
          <Component {...pageProps} />
      
      </DataContextProvider>
    </NextUIProvider>
  );
}

export default MyApp
