import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from 'react-i18next';
import App from "./App";
import "./index.css";
import "./i18n";
import i18n from './i18n';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </HelmetProvider>
);
