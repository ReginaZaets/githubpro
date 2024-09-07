import { Navigate, Route, Routes } from "react-router-dom";
import { paths } from "./lib/paths.ts";
import MainPage from "./pages/MainPage.tsx";
import { LayoutHeader } from "./components/LayoutHeader/LayoutHeader.tsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutHeader />}>
        <Route path={paths.MAIN} element={<MainPage />} />
        <Route path={paths.NOT_FOUND} element={<Navigate to={paths.MAIN} />} />
      </Route>
    </Routes>
  );
};
