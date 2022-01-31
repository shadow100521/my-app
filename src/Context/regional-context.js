import React from 'react';


const regionalPreferences = {
  country: 'france',
  locale: 'fr_Fr',
  flag: 'FR',
  devise: 'eur'
};

const RegionalContext = React.createContext();

constRegionalProvider = ({ children }) => {
  return (
    <RegionalContext.Provider value={regionalPreferences}>
      {children}
    </RegionalContext.Provider>
  );
};

export { RegionalContext, RegionalProvider };
