import './App.css'
import Navbar from './Component/Navbar/navbar'
import Home from './Component/HomePage/Home'
import Footer from './Component/Footer/Footer'
import AboutUs from './Component/AboutPage/AboutUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './Component/Services/services'
import ContactUs from './Component/Contact/ContactUs';


function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
