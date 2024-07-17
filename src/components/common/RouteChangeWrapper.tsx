import { Router } from "next/router";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const RouteChangeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);
  return <>{loading ? <Loading /> : children}</>;
};

export default RouteChangeWrapper;
