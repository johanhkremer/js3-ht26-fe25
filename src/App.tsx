import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => setCartCount((cartCount) => cartCount + 1)

  return <>
    <Nav cartCount={cartCount} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
}

export default App
