import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Navigation from "./components/navs/Navigation";
import { Homework3 } from "./pages/index";


function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={() => (<></>)} />
                <Route path="/homework3"  component={Homework3} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
