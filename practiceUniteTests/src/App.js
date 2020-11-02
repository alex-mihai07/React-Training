import React from 'react';
import './App.css';
import { Courses } from "./components/Courses";

document.title = 'Courses App';
function App() {
  return (
    <div className="App">
      <Courses />
    </div>
  );
}

export default App;
