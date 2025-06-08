import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Homepage from './components/Homepage.jsx';

const App = () => {

  return (
    <div className="App">
      <h1>EDM Festival Favorites</h1>
      <p>Welcome to the list of some of the best EDM Festivals in the US!</p>
      <Homepage />
    </div>
  )
}

export default App