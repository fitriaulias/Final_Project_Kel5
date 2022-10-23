import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
// import AllNews from './features/All/All';
// import IndonesiaNews from './features/Indonesia/Indonesia';
import CovidNews from './pages/Covid/Covid';
import ProgrammingNews from './pages/Programming/Programming';
import Saved from './pages/Saved/Saved'
import AboutUs from './pages/AboutProgress/AboutUs';
import IndonesiaPage from './pages/Indonesia/Indonesia';
import AllPage from './pages/All/All';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <SidebarLeft/>
      <SidebarRight />
      <Routes>
        <Route path="/all" element={<AllPage />} />
        <Route path="/" element={<IndonesiaPage />} />
        <Route path="/programming" element={<ProgrammingNews />} />
        <Route path="/covid19" element={<CovidNews />} />
        <Route path="/saved" element={<Saved/>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
