import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import "../node_modules/nprogress/nprogress.css";
import { PersistGate } from "redux-persist/integration/react";
import "react-awesome-lightbox/build/style.css";
import "./ultils/i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
        {/* </React.StrictMode> */}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
