import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hayapp from './components/Hayapp';



function App() {
  const customStyles = {
    fontFamily: "sans-serif" // Specify your desired font family
  };
  return (
    <div className="App">
      <p class='bg-dark d-none d-md-block text-light py-1'>FREE shipping on all prepaid orders above Rs. 800</p>
   
      <Hayapp />
    </div>
  );
}

export default App;
