import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Relativity from './Pages/relativity';
import SolidState from './Pages/SolidState';
import EE from './Pages/ee';
import ME from './Pages/me';
import QMech from './Pages/qmech';
import CompEng from './Pages/compeng';
import CompProg from './Pages/compprog';
import Math from './Pages/math';

import Classical from './Pages/classical';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} exact/>
        <Route path="/relativity" element={<Relativity />}/>
        <Route path="/SolidState" element={<SolidState />}/>
        <Route path="/EE" element={<EE />}/>
        <Route path="/ME" element={<ME />}/>
        <Route path="/QMech" element={<QMech />}/>
        <Route path="/CompEng" element={<CompEng />}/>
        <Route path="/CompProg" element={<CompProg />}/>
        <Route path="/Classical" element={<Classical />}/>
        <Route path="/CompProg" element={<CompProg />}/>
        <Route path="/Math" element={<Math />}/>
        
      </Routes>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


