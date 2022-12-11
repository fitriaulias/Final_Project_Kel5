import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"
import { Stack } from "react-bootstrap";
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail'

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
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
