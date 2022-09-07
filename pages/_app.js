import "../styles/global.css";
import "../styles/app.css";
import { Provider } from "react-redux";
import store from "../app/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
