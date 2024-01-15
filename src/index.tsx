import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store, persistor } from "redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyle } from "components/globalstyle";
import App from "components/App/App";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-ts-phonebook">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
