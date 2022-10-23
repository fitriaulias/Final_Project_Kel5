import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import AllNews from './features/All/All';
import IndonesiaNews from './features/Indonesia/Indonesia';
// import AboutProgress from './pages/AboutProgress/AboutProgress';
import AboutUs from './pages/AboutProgress/AboutUs';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <SidebarLeft/>
      <SidebarRight />
      <Routes>
        <Route path="/all" element={<AllNews />} />
        <Route path="/" element={<IndonesiaNews />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
