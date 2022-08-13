import logo from './logo.svg';
import './App.css';

function App() {
  const allName = ["Salman", "Arman", "Swhadhin"]
  return (
    <div className="App">
      <Nayok name={allName[0]}></Nayok>
      <Nayok name="Sakib"></Nayok>
      <Nayok name="Salman"></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  
      </header>
    </div>
  );
}
function Nayok(props){
const nayokStyle ={
  border: "2px solid red",
  margin: "20px"
}
  return (
    <div style={nayokStyle}>
    <h1>I am Nayok {props.name}</h1>
    <h3>I have done 5 Movies</h3>
    </div>
  )
}
export default App;
