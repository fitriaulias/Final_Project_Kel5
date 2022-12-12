import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Stack } from "react-bootstrap";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";

function NoMatch() {
  let location = useLocation();

  return (
    <div className="vh-100 d-flex">
      <Stack className="m-auto align-items-center">
        <h1>Error 404</h1>
        <h3>
          pages <code>{location.pathname}</code> not found
        </h3>
      </Stack>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
