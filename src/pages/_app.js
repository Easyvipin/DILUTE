import store from "@src/store/store";
import { Provider } from "react-redux";

import "@src/styles/globals.css";
import Layout from "@src/components/Layout";
import AuthCheck from "@components/AuthCheck";

export default function App({ Component, pageProps }) {
  console.log(Component.getLayout);
  const getLayout =
    Component.getLayout || ((page) => <Layout children={page} />);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
  x;
}
