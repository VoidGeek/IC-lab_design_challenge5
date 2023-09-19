import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Carousel from "./components/Home";
import Card from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Carousel/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<Card/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
