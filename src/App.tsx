import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Shop from "./Shop";
import Nav from "./components/Nav";
import About from "./About";
import ProductDetail from "./ProductDetail";

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

    <h2>Pure & Impure functions</h2>

  </>
}

export default App
