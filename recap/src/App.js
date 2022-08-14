import React, { useEffect, useState, useTransition } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const allName = ["Salman", "Arman", "Swhadhin"]
  return (
    <div className="App">
      <Nayok name={allName[0]} age="45"></Nayok>
      <Nayok name={allName[1]}></Nayok>
      <Nayok name="Solim Uddin"></Nayok>
      <AddMovies></AddMovies>



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  
      </header>
    </div>
  );
}

function AddMovies(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add all Movies</button>
      <h3>I seen :{count} Movies</h3>
    </div>
  )
}

function Nayok(props){
const nayokStyle ={
  border: "2px solid red",
  margin: "20px"
}
  return (
    <div style={nayokStyle}>
    <h1>I am Nayok {props.name}</h1>
    <h3>I have done 5 Movies in {props.age || 30} years</h3>
    </div>
  )
}

export default App;
