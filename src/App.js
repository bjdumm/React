import logo from './logo.svg';
import './App.css';
import Test from './Test';
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="content">
      <Test title="Stuff in the body of app." />
      <Test title="second component" />
      <Test title="Third Component" />
      <Test title="fourth component" />
      <Test title="Fifth component" />
      <Test title="Sixth component" />
      <Test title="Seventh Component" />
      <Test title="Eigth component" />
      <Test title="Ninth component" />
      <Test title="Tenth component" />
      </div>
      <footer className="App-footer">
        <p>Put some footer links here</p>
      </footer>
    </div>
  );
}

export default App;
