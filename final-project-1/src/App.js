import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import AllNews from './features/All/All';
import IndonesiaNews from './features/Indonesia/Indonesia';
import AboutProgress from './pages/AboutProgress/AboutProgress';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <SidebarLeft/>
      <Routes>
        <Route path="/all" element={<AllNews />} />
        <Route path="/" element={<IndonesiaNews />} />
        <Route path="/about" element={<AboutProgress />} />
      </Routes>
    </div>
  );
}

export default App;
