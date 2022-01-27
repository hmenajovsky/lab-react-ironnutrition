import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import importedFoods from './foods.json';
import FoodBox from './FoodBox';
import AddForm from './AddForm';
import SearchForm from './SearchForm';
import TodayList from './TodayList';

function App() {
  const [foods, setFoods] = useState(importedFoods);

  const addFood = food => {
    setFoods([...foods, food]);
  };

  const [clicked, setClicked] = useState(false);

  const [searchedString, setSearchedString] = useState('');

  let searchedFoods = null;
  if (searchedString !== '') {
    searchedFoods = foods.filter(food => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFoods = foods;
  }
  const [todayFood, setTodayFood] = useState([{name:"", calories:0, image:"", quantity:0, }]);

  let total = 0;

  const addToList = food => {        
        setTodayFood([...todayFood, food]);
        console.log("todayFood", todayFood);      
       total = todayFood.reduce((acc, val) => Number(acc) + val.quantity, 0 ); /* sum of the added food items */
      console.log("total",total);
  };


  return (
    <>
      <SearchForm
        searchedString={searchedString}
        callbackSearch={setSearchedString}
      />
      <div className="columns">
        <div className="column is-two-thirds">
          <div>
            <h1>Add new food </h1>
            <p>
              <button onClick={() => setClicked(!clicked)}>OK</button>
            </p>

            {clicked && <AddForm addFood={addFood} clicked={clicked} />}
          </div>
          {searchedFoods.map((food, i) => {
            return (
              <FoodBox food={food} key={food.name} addToList={addToList}/>
            );
          })}
        </div>
        <div className="column">
          <TodayList today={todayFood} />
        </div>
      </div>
    </>
  );
}

export default App;
