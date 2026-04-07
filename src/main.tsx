import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "@/App";
import { DataProcessingPolicyPage } from "@/features/legal/data-processing-policy-page";
import { PublicOfferPage } from "@/features/legal/public-offer-page";
import { PrivacyPolicyPage } from "@/features/legal/privacy-policy-page";
import "@/styles/globals.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<PrivacyPolicyPage />} path="/privacy" />
        <Route element={<DataProcessingPolicyPage />} path="/data-processing-policy" />
        <Route element={<PublicOfferPage />} path="/public-offer" />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
