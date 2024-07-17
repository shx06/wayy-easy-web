import RouteChangeWrapper from "@/components/common/RouteChangeWrapper";
import { wrapper } from "@/features/app/store";
import BasicLayout from "@/layouts/BasicLayout";
import "@/styles/globals.css";
import ThemeProvider from "@/utils/theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, ...rest }: AppPropsWithLayout) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactNode) => <BasicLayout>{page}</BasicLayout>);

  return (
    <>
      {/* Default Head */}
      <ToastContainer />
      <Head>
        <title>Web Serv | Developer Agency</title>
        <meta
          name="description"
          content="web serv - a web development service provider agency"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Providers & Wrappers */}
      <Toaster position="top-right" />
      <Provider store={store}>
        <SessionProvider session={props.session}>
          <ThemeProvider>
            <AnimatePresence>
              <RouteChangeWrapper>
                {getLayout(<Component {...props.pageProps} />)}
              </RouteChangeWrapper>
            </AnimatePresence>
          </ThemeProvider>
        </SessionProvider>
      </Provider>
    </>
  );
};

// export default wrapper.withRedux(App);
export default App;
