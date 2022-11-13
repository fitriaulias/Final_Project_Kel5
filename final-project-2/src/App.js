import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import DetailProducts from "./pages/products/DetailProducts";
// import Products from "./pages/products/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
