import "../styles/globals.css";
import Format from "../layouts/format";

function MyApp({ Component, pageProps }) {
  return (
    <Format>
      <Component {...pageProps} />
    </Format>
  );
}

export default MyApp;
