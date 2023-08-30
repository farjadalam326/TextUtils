
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');

  const toogleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
        <Router>
          <Navbar title = "TextAnalyzer" mode={mode} toogleMode ={toogleMode}/>
          <div className="container my-3">
            
          <Switch>
              <Route exact path="/about">
              <About/>
          </Route>
          <Route exact path="/">
          <TextForm heading ="Enter the text to Analyze below"/>
          </Route>
        </Switch>
        
        </div>
        
        </Router>
        
        
            </>
  );
}

export default App;
