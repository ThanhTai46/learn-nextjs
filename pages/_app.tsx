import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EmptyLayout } from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
