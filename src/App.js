import './App.css';
import Test from './Components/Test';

import grImg from './Assets/PageLinks/gr.jpeg';


function App() {
  
  
  return (
    
    <div className="App">
      <header className="App-header">
        <p>Science & Engineering Reference</p>
      </header>
    
      
      <div class="content">
      <Test title="General Relativity" im={grImg} path="/relativity" />
      <Test title="Solid State Physics" im={grImg} path="/SolidState"/>
      <Test title="Eletrical Engineering" im="" path="/EE"/>
      <Test title="Mechanical Engineering" im="" path="/ME"/>
      <Test title="Classical Physics" im="" path="/classical"/>
      <Test title="Math" im="" path="/math"/>
      <Test title="Quantum Mechanics" im="" path="/QMech"/>
      <Test title="Computer Engineering" im="" path="/CompEng"/>
      <Test title="Computer Programming" im="" path="/CompProg"/>
      
      </div>
      
    </div> 
      
    
  );
}

export default App;
