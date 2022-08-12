import logo from './logo.svg';
import './App.css';

function App() {
  const scholar = ["Zakir Nayek", "Mizanur Rahman", "Ahmad Ullah", "Noman Ali Khan"] 
  const Products = [
    {name: "Photoshop", price: "45.00$"},
    {name: "illustrator", price: "145$"},
    {name: "PDF Reader", price: "5$"},
    {name: "Primer Pro", price: "245$"},
  ]

  // const ProductNames = Products.map(product => product.name);
  // const scolarNames =  scholar.map(scol => scol);
  // console.log(scolarNames);

//   var person ={ name: "Tamim Mahmud",
//                 age: 30,
//                 profession: "Programing ",              
// }
// var style ={
//   color : "#61DAFB",
//   backgroundColor : "green",
//   padding: 15,
//   borderRadius : 8,
// }
  return (
    <div className="App">
      <header className="App-header">
        <ul>{
          scholar.map(schol => <li>{schol}</li>)
        }
          {/* <li>{scholar[0]}</li>
          <li>{scholar[1]}</li>
          <li>{scholar[2]}</li> */
        }
        {
          Products.map(products => <li>{products.name}</li>)
        }
        </ul>
        {
          Products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={Products[0]}></Product>
        <Product product={Products[1]}></Product>
        <Product product={Products[2]}></Product> */}
        {/* <Product proName={Products[1].name} price={Products[1].price}></Product> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h2 style={style}>Hello World in React !</h2>
        <h3>Simple math 3+5= {3+5}</h3>
        <h3 style={{backgroundColor : 'green', padding: 10, borderRadius: 8}}>Heard Math (2+8)*4 + 15 = {(2+8)*4 + 15}</h3>
        <h4>My name is {person.name + " . My age is " + person.age}</h4>
        <MyInfo name=" Tamim Mahmud" age="31" profession="Programing"></MyInfo>
        <MyInfo name = "Rajjak" age=" 40" profession="Acting"></MyInfo>
        <MyInfo name = {scholar[0]} age=" 50" profession="Islamic Scholar"></MyInfo> */}
        {/* <ShopInfo name="Tamim Com" add="Lohagara, Narail"></ShopInfo>
        <ShopInfo name="Rohim Com" add="Lohagara, Narail"></ShopInfo> */}


        {/* { <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> } */}
      </header>
    </div>
  );
}

// function MyInfo(props){
//   var PersonStyle={
//     border: "2px solid red", 
//     margin: "5px", padding: "10px", 
//     backgroundColor: "cyan", 
//     color: "black", 
//     borderRadius: "8px"
//   }
//   return (
//   <div style= {PersonStyle}>
//   <h2>Name:{props.name}</h2>
//   <h2>Age: {props.age}</h2>
//   <h3>Profession: {props.profession}</h3>
//   </div>
//   )
// }


// function ShopInfo(props){
//   var ShopStyle={
//     border: "2px solid red", 
//     margin: "5px", padding: "10px", 
//     backgroundColor: "cyan", 
//     color: "black", 
//     borderRadius: "8px"
//   }
//   return (
//     <div style={ShopStyle}>
//       <h2>Shop Name: {props.name}</h2>
//       <h3>Address: {props.add}</h3>
//       <h3>Service: Computer Work, sells, service</h3>
//     </div>
//   )
// }


function Product(props){
  const ProductStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "300px",
    width: "300px",
    float : "left",
    color: "black"
  }
const {name, price} = props.product;
  return (
    <div style={ProductStyle}>
      {/* <h2>{props.product.name}</h2> */}
      <h2>{name}</h2>
      {/* <h1>Price: {props.product.price}</h1> */}
      <h1>Price: {price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

export default App;