import { ImpureCounter } from "./components/ImpureCounter";
import { PureCounter } from "./components/PureCounter";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Counter from "./components/Counter";
import Home from "./Home";
import Nav from "./components/Nav";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";
import Shop from "./Shop";

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
    <PureCounter count={2} />
    <PureCounter count={2} />
    <ImpureCounter />
    <ImpureCounter />

    <h2>Use Effect</h2>
    <Counter />
  </>
}

export default App
