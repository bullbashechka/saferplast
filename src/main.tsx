import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "@/App";
import { DataProcessingPolicyPage } from "@/features/legal/data-processing-policy-page";
import { PrivacyPolicyPage } from "@/features/legal/privacy-policy-page";
import { GeoServicePage } from "@/features/seo/geo-service-page";
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
        <Route element={<GeoServicePage cityKey="karaganda" />} path="/karaganda" />
        <Route element={<GeoServicePage cityKey="temirtau" />} path="/temirtau" />
        <Route element={<GeoServicePage cityKey="shakhtinsk" />} path="/shakhtinsk" />
        <Route element={<GeoServicePage cityKey="saran" />} path="/saran" />
        <Route element={<GeoServicePage cityKey="abay" />} path="/abay" />
        <Route
          element={<GeoServicePage cityKey="karaganda-districts" />}
          path="/karaganda/maykuduk-prishakhtinsk"
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
