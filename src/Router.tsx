import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./componets/Home";

import { Header } from "./componets/Header";
import { Suspense } from "react";

import { Projetos } from "./componets/Projetos";
import { NotFout } from "./componets/NotFout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Home />} path="/" />
            <Route element={<Projetos />} path="/projetos" />
          </Route>
          <Route element={<NotFout />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
