import logo from './logo.svg';
import './App.css';

function App() {
  var person ={ name: "Tamim Mahmud",
                age: 30,
                profession: "Programing ",              
}
var style ={
  color : "#61DAFB",
  backgroundColor : "green",
  padding: 15,
  borderRadius : 8,
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h2 style={style}>Hello World in React !</h2>
        <h3>Simple math 3+5= {3+5}</h3>
        <h3 style={{backgroundColor : 'green', padding: 10, borderRadius: 8}}>Heard Math (2+8)*4 + 15 = {(2+8)*4 + 15}</h3>
        <h4>My name is {person.name + " . My age is " + person.age}</h4>
        <MyInfo></MyInfo>
        <MyInfo></MyInfo>
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

function MyInfo(){
  var PersonStyle={
    border: "2px solid red", 
    margin: "5px", padding: "10px", 
    backgroundColor: "cyan", 
    color: "black", 
    borderRadius: "8px"
  }
  return (
  <div style= {PersonStyle}>
  <h2>First Name: Tamim</h2>
  <h2>Last Name: Mahmud</h2>
  </div>
  )
}

export default App;
