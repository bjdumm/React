import './App.css';
import Test from './Components/Test';

import grImg from './Assets/PageLinks/gr.jpeg';

function App() {
  
  
  return (
    
    <div className="App">
      <header className="App-header">
        <p style={{color:"white"}}>Where is this?</p>
      </header>
    
      
      <div class="content">
      <Test title="General Relativity" im={grImg} path="/relativity" />
      <Test title="Solid State Physics" im="" path="/SolidState"/>
      <Test title="Eletrical Engineering" im="" path="/EE"/>
      <Test title="Mechanical Engineering" im="" path="/ME"/>
      <Test title="Classical Physics" im="" path="/classical"/>
      <Test title="Electromagnetism" im="" path="/EM"/>
      <Test title="Quantum Mechanics" im="" path="/QMech"/>
      <Test title="Computer Electronics" im="" path="/CompElec"/>
      <Test title="Computer Graphics" im="" path="/CompGraph"/>
      
      </div>
      
    </div> 
      
    
  );
}

export default App;
