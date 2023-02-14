import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Component } from 'react';
import Formdangky from './demobt';


class App extends Component{
   
    render(){
        return(
            <div>
                <Formdangky/>
            </div>
            )
    }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
//       <h1>
//         Thầy Cường Hải Sản !
//       </h1>
//     </div>
//   );
// }


