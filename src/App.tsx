import * as React from 'react'
import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//componenets
import Details from './components/Details';
import HomePage from './components/HomePage';
import About from './components/About';
import IDetails from './components/Details';

class App extends Component <{},any> {
  render() {
    <HomePage/>
    return (
    <> 
    {/* <HomePage/> */}
    <Router>
      <div className="App">
        <header>
          {/* <Link to="/">Home1 </Link> */}
          <Link to="/HomePage" id="menuLink">Home</Link>  
          {/* <Link to="/Details">Details </Link>  */}
          <Link to="/About" id="menuLink">About</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Details" element={<Details />} />
          {/* <Route path="/Details/1" element={<Details />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/HomePage" /*element={<HomePage />} */>
            <Route path=":id" element={<IDetails /*someProps={1}*//> } />
          </Route>
          <Route path="/HomePage/:id" element={<IDetails /*someProps={1}*//>} />
        </Routes>
      </div>
    </Router>
    </>  
      //why not work?
    )
  }
}
export default App;



// <Router>
        // <Route exact path={'/'}> <Home/></Route>
      // </Router>

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//<Route /*key="/tryy"*/ path="/tryy" element={<About someProps={this.state.propsToChild} />} />