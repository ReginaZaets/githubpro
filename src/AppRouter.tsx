import { Route, Routes } from "react-router-dom";
import { paths } from "./lib/paths.ts";
import MainPage from "./pages/MainPage.tsx";
import { LayoutHeader } from "./components/LayoutHeader/LayoutHeader.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutHeader />}>
        <Route path={paths.MAIN} element={<MainPage />} />
      </Route>
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
