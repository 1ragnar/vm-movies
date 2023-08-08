import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Layout from "../src/components/Layout/Layout";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Component {...pageProps} />
    </Layout>
  );
}
