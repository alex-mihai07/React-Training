import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Navigation from "./components/navs/Navigation";
import { Homework3, Homework5 } from "./pages/index";


function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={() => (<></>)} />
                <Route path="/homework3"  component={Homework3} />
                <Route path="/homework5"  component={Homework5} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
