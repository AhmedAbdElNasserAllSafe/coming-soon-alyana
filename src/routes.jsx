import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/loader/index.jsx";
import NotFound from "./components/404Page/index.jsx";

// Lazy load pages
const Home = lazy(() => import("./pages/home.jsx"));

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
