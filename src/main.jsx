import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./styles.css";
import App from "./App";

// Correct way to use createRoot in React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
