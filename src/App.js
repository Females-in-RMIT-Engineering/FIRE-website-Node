import React from 'react';
import "./App.css";

import NavigationBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Committee from './pages/committee';
import Sponsors from './pages/sponsors';
import Gallery from './pages/gallery';
import Contacts from './pages/contacts';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Committee} />
        <Route path='/annual' component={Sponsors} />
        <Route path='/team' component={Gallery} />
        <Route path='/blogs' component={Contacts} />
      </Routes>
    </Router>
  );
}

export default App;