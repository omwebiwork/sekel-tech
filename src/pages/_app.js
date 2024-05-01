import Layout from "@/Layout";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
