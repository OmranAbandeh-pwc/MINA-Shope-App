import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";

import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about-page/AboutPage";
import ContactPage from "./pages/contact-page/ContactPage";
import SustainabilityPage from "./pages/sustainability-page/SustainabilityPage";
import MainFooter from "./components/footer/MainFooter";
import ShopPage from "./pages/shop-page/ShopPage";
import ProductDetailsPage from "./pages/product-details-page/ProductDetailsPage";

function App() {
  return (
  <>
    <header className="header-navbar">
      <NavBar/>
    </header>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop/:products" element={<ShopPage/>}/>
      <Route path="/sustainability" element={<SustainabilityPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/product/details" element={<ProductDetailsPage/>}/>
      
    </Routes>
    <MainFooter/>
    
  </>
  );
}

export default App;
