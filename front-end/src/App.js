import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/footer';
import NavBar from './components/navbar';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Projects from './pages/projects';

const db = require('./github');

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='canvas-2' style={{zIndex:"5", color: "#E4E4E7", margin: "auto", backgroundColor: "#18181B", padding: "0 30px", paddingTop: "100px", borderTop:"0"}}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact-me" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
