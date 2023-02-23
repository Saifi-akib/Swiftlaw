import './App.css';
import Navbar from './Components/Navbar';
import Page from './Components/Page';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Routes>
        <Route exact path="/" element={<Page />}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
