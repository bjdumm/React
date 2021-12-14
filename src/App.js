import './App.css';
import Test from './Components/Test';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Relativity from './Pages/relativity';
import SolidState from './Pages/SolidState';

function App() {
  
  
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <p style={{color:"white"}}>Where is this?</p>
      </header>
    
      
      <div class="content">
      <Test title="General Relativity" path="/relativity" />
      <Test title="Solid State Phyics" path="/SolidState"/>
      <Test title="Digital Electronics" path="/relativity"/>
      </div>
    </div>
      
      
      <Routes>
        <Route path="/relativity" component={Relativity}/>
        <Route path="/SolidState" component={SolidState}/>
      </Routes>
   </BrowserRouter> 
  );
}

export default App;
