import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const DefaultPage = lazy(() => import("./pages/index"));
const Home = lazy(() => import("./pages/home"));
const Products = lazy(() => import("./pages/products"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Suspense>
  );
}

export default App;
