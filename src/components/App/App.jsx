import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));

const Navigation = lazy(() => import("../Navigation/Navigation"));

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </Suspense>
  );
}
