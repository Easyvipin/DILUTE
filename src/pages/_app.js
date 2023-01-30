import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@src/store";
import { Provider } from "react-redux";

import "@src/styles/globals.css";
import Layout from "@src/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading....</div>} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
