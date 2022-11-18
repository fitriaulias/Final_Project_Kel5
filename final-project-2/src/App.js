import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/cart/Cart";
import DetailProducts from "./pages/products/DetailProducts";
import Products from "./pages/products/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import Navigation from "./components/Navbar";
import { useState } from "react";
import Login from "./pages/login/Login";
import AboutUs from "./pages/aboutProgress/AboutUs";
import Stock from "./pages/admin/Stock";
import Recap from "./pages/admin/Recap";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  // if(token == 'IM_ADMIN'){console.log(1)}else{console.log(0)}

  return (
    <div className="App">
      <Navigation token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="product" element={<Products />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/recap" element={<Recap />}/>
        
        <Route path="/login" element={<Login setToken={setToken} />}/>
        {token === 'IM_ADMIN' ? <Route path="/admin" element={<Stock setToken={setToken} />}/> : <Route path="/login" element={<Login setToken={setToken} />}/>}
        <Route path="/" element={<Home token={token} setToken={setToken} /> }/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
