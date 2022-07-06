import * as React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Tryy from './components/Tryy';
import Details from './components/Details';
import HomePage from './components/HomePage';
import About from './components/About';
// import { BrowserRouter, Route, Router } from 'react-router-dom';
import { Component } from 'react';
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends Component <{},any> {
  render() {
    <HomePage/>
    return (
    <> 
    {/* <HomePage/> */}
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/HomePage">Home</Link>  
          <Link to="/Details">Details</Link> 
          <Link to="/About">About</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Details" element={<Details />} />
          {/* <Route path="/Details/1" element={<Details />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/HomePage" /*element={<HomePage />} */>
            <Route path=":id" element={<Details /> } />
          </Route>
        </Routes>
      </div>
    </Router>
    </>  
      //why not work?
    )
  }
}

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

export default App;
