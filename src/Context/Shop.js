import React, { useContext } from 'react';
import { RegionalContext } from './Context/regional-context';


const Shop = () => {
  const regionalPreferences = useContext(RegionalContext);
  return (
    <div>
      <p>
        <strong>{regionalPreferences.country}</strong>
      </p>
      <p>Votre locale est: <strong>{regionalPreferences.locale}</strong></p>
      <p>Votre monnaie est: <strong>{regionalPreferences.devise}</strong></p>
    </div>
  );
};


export default Shop;