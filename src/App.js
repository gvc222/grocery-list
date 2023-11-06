
import './App.css';
import { List } from './components/List';
import React from 'react';
const App = () => {

  const groceryList = ["Baby Formula", "Bacon", "Bread", "Butter", "Cake", "Catsup", "Cereal", "Cheese", "Cocoa", "Cookies", "Coffee", "Cream", "Delicatess", "Eggs", "Fish", "Flour", "Frozen Food", "Fruit", "Jams", "Juices", "Matches", "Meats", "Milk", "Mustard", "Noodles", "Oil", "Onions", "Pepper", "Poultry", "Potatoes", "Rice", "Salt", "Soap", "Soups", "Spaghetti", "Spices", "Sugar", "Tea", "Vegetable", "Vinegar"];

  return (
    <div className="App">
      <div className="header">
        <h1 className="header-title">Grocery List App</h1>
      </div>
      
      <div className="body">
        <List groceryList={groceryList}/>
        {/* <NewList /> 
         TO DO: Add a functionality to add new items into the groceryList array upon submitting a text to NewList
        */}
      </div>
    </div>
  )
}

export default App;
