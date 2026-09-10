import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";

function App() {

  return <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
}

export default App
