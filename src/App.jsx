
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Demos from './pages/demos';
import Projects from './pages/projects';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/demos' element={<Demos/>} />
        <Route path='/projects' element={<Projects/>} />
    </Routes>
    </Router>
);
}
  
export default App;