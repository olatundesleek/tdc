import "../src/assets/css/style.css";
import { ChakraProvider } from "@chakra-ui/react";


import "nprogress/nprogress.css"; //styles of nprogress
import React, { Fragment, useEffect, useState } from "react";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoader from "../src/components/PageLoader/PageLoader";
import Marquee from "react-fast-marquee";

export default ({ Component, pageProps }) => {
  // Router.events.on("routeChangeStart", (url) => {
  //   console.log("route start");
  // });
  const [loading, setLoading] = useState(true);

  // Router.events.on("routeChangeStart", () => NProgress.start());
  // Router.events.on("routeChangeComplete", () => NProgress.start());

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ChakraProvider>
      {/* <Marquee pauseOnHover={true} speed={150} >
COIN VESTING PERIOD STARTS JULY 2022</Marquee> */}
      {/* {loading ? "i am loading" : "done loading"} */}
      {/* {<PageLoader />} */}
      <Fragment>
        {/* <NextNProgress /> */}
        <Component {...pageProps} />
      </Fragment>
      <ToastContainer />
      {/* {console.log(loading)} */}
    </ChakraProvider>
  );
};
