import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

//TODO header tittle change on route change
//TODO add favicon
//TODO add meta description
//TODO add more seo stuff
//TODO add react helmet for dynamic meta tags
