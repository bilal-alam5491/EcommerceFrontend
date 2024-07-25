import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";


export const server = "http://localhost:3001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
