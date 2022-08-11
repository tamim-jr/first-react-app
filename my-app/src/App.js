import logo from './logo.svg';
import './App.css';

function App() {
  var nam = "Tamim Mahmud"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h2>Hello World in React !</h2>
        <h3>Simple math 3+5= {3+5}</h3>
        <h3>Heard Math (2+8)*4 + 15 = {(2+8)*4 + 15}</h3>
        <h4>My name is {nam}</h4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
