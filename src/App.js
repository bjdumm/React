import './App.css';
import Topic from './Components/Topic';

import grImg from './Assets/PageLinks/gr.jpeg';


function App() {
  
  
  return (
    
    <div className="App">
      <header className="App-header">
        <p>Science & Engineering Reference</p>
      </header>
    
      
      <div class="content">
      <Topic title="General Relativity" im={grImg} path="/relativity" />
      <Topic title="Cosmology" im={grImg} path="/cosmology" />
      <Topic title="Solid State Physics" im={grImg} path="/SolidState"/>
      <Topic title="Eletrical Engineering" im="" path="/EE"/>
      <Topic title="Mechanical Engineering" im="" path="/ME"/>
      <Topic title="Classical Physics" im="" path="/classical"/>
      <Topic title="Math" im="" path="/math"/>
      <Topic title="Quantum Mechanics" im="" path="/QMech"/>
      <Topic title="Computer Engineering" im="" path="/CompEng"/>
      <Topic title="Computer Programming" im="" path="/CompProg"/>
      
      </div>
      
    </div> 
      
    
  );
}

export default App;
