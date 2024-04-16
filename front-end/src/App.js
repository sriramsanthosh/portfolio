import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/footer';
import NavBar from './components/navbar';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='canvas-2 main-content-container'>
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
