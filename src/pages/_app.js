import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store";
import { Provider } from "react-redux";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading....</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
