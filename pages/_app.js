import Layout from "../Layouts/layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.scss";
import "../styles/swiper.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} className={"Component"} />
    </Layout>
  );
}

export default MyApp;
