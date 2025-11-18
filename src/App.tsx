import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { HomePage } from "@/pages/HomePage";
import { CatalogPage } from "@/pages/CatalogPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { ProductAuthenticationPage } from "@/pages/ProductAuthenticationPage";
import { CodeGeneratorPage } from "@/pages/CodeGeneratorPage";

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/verify" element={<ProductAuthenticationPage />} />
            <Route path="/admin/codes" element={<CodeGeneratorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
