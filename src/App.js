import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";

import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about-page/AboutPage";
import ContactPage from "./pages/contact-page/ContactPage";
import SustainabilityPage from "./pages/sustainability-page/SustainabilityPage";


function App() {
  return (
  <>
    <header className="header-navbar">
      <NavBar/>
    </header>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/sustainability" element={<SustainabilityPage/>}/>
    </Routes>
  </>
  );
}

export default App;
