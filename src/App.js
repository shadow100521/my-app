import React from 'react';
import './App.css';
import Shop from './Shop';
import { RegionalProvider } from './Context/regional-context';


function App() {
  return (
    <div className="App">
      <RegionalProvider>
        <Shop />
      </RegionalProvider>
    </div>
  );
};





export default App;
