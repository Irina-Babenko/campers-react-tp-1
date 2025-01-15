import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const Navigation = lazy(() => import("../Navigation/Navigation"));

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
