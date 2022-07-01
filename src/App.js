import React from 'react';
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from './pages';
import About from './pages/about';
import Committee from './pages/committee';
import Sponsors from './pages/sponsors';
import Gallery from './pages/gallery';
import Contacts from './pages/contacts';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="committee" element={<Committee />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="gallery" element={<Gallery />}/>
        <Route path="contacts" element={<Contacts />} />
      </Route>  
      </Routes>
    </Router>
  );
}

export default App;