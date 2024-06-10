
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/footer';
import NavBar from './components/navbar';
import { Suspense, lazy, useEffect } from 'react';
import FallingLineSpinner from './components/react-spinners/FallingLines';

function App() {
  const LazyHome = lazy(()=> import("./pages/home"));
  const LazyAbout = lazy(()=> import('./pages/about'));
  const LazyProjects = lazy(()=> import("./pages/projects"));
  const LazyContactMe = lazy(()=> import("./pages/contact"));
  const LazyPageNotFound = lazy(()=> import("./pages/Page404"));


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='canvas-2 main-content-container'>
          <Routes>
            <Route exact path='/' element={<Suspense fallback={<FallingLineSpinner/>}><LazyHome /></Suspense>} />
            <Route exact path="/about" element={<Suspense fallback={<FallingLineSpinner/>}><LazyAbout /></Suspense>} />
            <Route exact path="/projects" element={<Suspense fallback={<FallingLineSpinner/>}><LazyProjects /></Suspense>} />
            <Route exact path="/contact-me" element={<Suspense fallback={<FallingLineSpinner/>}><LazyContactMe /></Suspense>} />
            <Route exact path="*" element={<Suspense fallback={<FallingLineSpinner/>}><LazyPageNotFound /></Suspense>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
