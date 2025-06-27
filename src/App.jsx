import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import Home from "./Component/HomePage/Home";
import Footer from "./Component/Footer/Footer";
import AboutUs from "./Component/AboutPage/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Component/Services/services";
import ContactUs from "./Component/Contact/ContactUs";
import Blog from "./Component/Blog/Blog";
import TransformersRepair from "./Component/OurServices/TransformersRepair";
import TransformersOnRent from "./Component/OurServices/TransformersOnRent";
import ServicingOnSite from "./Component/OurServices/ServicingOnSite";
import SubstationConstruction from "./Component/OurServices/SubstationConstruction";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
          <Route path="/TransformersRepair" element={<TransformersRepair />} />
          <Route path="/TransformersOnRent" element={<TransformersOnRent />} />
          <Route path="/ServicingOnSite" element={<ServicingOnSite />} />
          <Route path="/SubstationConstruction" element={<SubstationConstruction />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
