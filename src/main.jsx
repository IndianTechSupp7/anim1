import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainRoute from "./MainRoute.jsx";
import { NavbarProvider } from "./providers/navbarProvider.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/*" element={<MainRoute />} />
        </Routes>
      </NavbarProvider>
    </BrowserRouter>
  </StrictMode>
);
