import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import AboutProgress from './pages/AboutProgress/AboutProgress';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        {/* <Route path="/" element={<Indonesia />} /> */}
        <Route path="/about" element={<AboutProgress />} />
      </Routes>
    </div>
  );
}

export default App;
