import Layout from "../Layouts/layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
