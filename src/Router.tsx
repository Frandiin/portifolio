import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./componets/Home";

import { Header } from "./componets/Header";
import { Suspense } from "react";
import { Sobre } from "./componets/Sobre";
import { Footer } from "./componets/Footer";
import { Projetos } from "./componets/Projetos";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Home />} path="/home" />
            <Route element={<Projetos />} path="/projetos" />
            <Route element={<Sobre />} path="/sobre" />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
