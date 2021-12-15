import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Relativity from './Pages/relativity';
import SolidState from './Pages/SolidState';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} exact/>
        <Route path="/relativity" element={<Relativity />}/>
        <Route path="/SolidState" element={<SolidState />}/>
      </Routes>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


