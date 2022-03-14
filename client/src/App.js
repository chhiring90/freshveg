import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const DefaultPage = lazy(() => import("./pages/index"));
const Home = lazy(() => import("./pages/home/index"));
const Products = lazy(() => import("./pages/products/index"));
const Checkout = lazy(() => import("./pages/checkout/index"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
