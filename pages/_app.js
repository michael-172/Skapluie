import Layout from "./Layouts/Layout.js";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.scss";
import "../styles/swiper.css";
import store from "../ReduxToolkit/ServicesSlice";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} className={"Component"} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
