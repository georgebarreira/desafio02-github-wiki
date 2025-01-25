import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles.jsx";
import App from "../src/pages/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
