import './App.css';
import React from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import { projects } from './data/data'

function App() {
  return (
    <Portfolio projects={projects} />
  );
}

export default App;
