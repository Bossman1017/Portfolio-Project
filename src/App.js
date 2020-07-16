import React from 'react';
import './App.css';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import AboutMe from './Components/About Me/About Me'
import './Navbar.css'
import { BrowserRouter as Router, Route, Switch , Link } from 'react-router-dom'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
  
       
        
        <div>
        <nav className = "navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About-Me">About Me</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
            <Link to="/Resume">Resume</Link>
            </li>
          </ul>
        </nav>
        
      <Switch>
      <Route path="/Resume">         
      <Resume /> 
      </Route>     
      <Route path="/About-Me">         
      <AboutMe />         
      </Route>         
      <Route path="/Contact">        
       <Contacts/>         
       </Route>  
       <Route path="/">           
      <Projects />          
      </Route>    
    
        </Switch>   
        <Footer/>
        </div>  
    </Router >
    </>
  );
}

export default App;
