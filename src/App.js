import { useState } from 'react';
import './App.css';

function App() {
  const [car, setCar]=useState({
                          year:2024,
                          make:"Ford",
                          model:"Mustang"
  })

  function handleYear(e){
    // ouvrir la colonne et changer la date
    setCar(car=>({...car,year:e.target.value}))
  }
  function handleMake(e){
    // ouvrir la colonne et changer make
    setCar(car=>({...car,make:e.target.value}))
  }
  function handleModel(e){
    // ouvrir la colonne et changer model
    setCar(c=>({...c,model:e.target.value}))
  }
  return (
    <div className="App">
      <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
     
      <input type="number" value={car.year} onChange={handleYear}/>
      <input type="text" value={car.make} onChange={handleMake}/>
      <input type="text" value={car.model} onChange={handleModel}/>
    </div>
  );
}

export default App;
