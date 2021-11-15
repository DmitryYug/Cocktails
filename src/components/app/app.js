import React from "react";
import CocktailCard from "../cocktail-card";
import SearchPanel from "../search-panel";

const App = () => {
    
    const describtion = [
        {learn: true, method: 'Stir', glass: 'Old fashioned glass', garnish: 'Orange peel+cherry', name: 'Old fashioned', id:'asd'},
        {learn: false, method: 'Shake', glass: 'Cocktail glass', garnish: 'Lime aromatic', name: 'Daiquiry', id:'fke' },
        {learn: true, method: 'Stir', glass: 'Old fashioned glass', garnish: 'Orange slice', name: 'Negroni', id:'olf'},
        {learn: false, method: 'Shake', glass: 'Cocktail glass', garnish: '-', name: 'Last word', id:'rmj'}
    ];
    

    
    
    return (
        <div className="app">
            <div className="search-panel">
                <SearchPanel/>
            </div>
                <CocktailCard header={describtion}/>
        </div>
    );
  };
  
  export default App;