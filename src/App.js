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
    setClicked(!clicked);
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
  const [todayFood, setTodayFood] = useState([
    { name: '', calories: 0, image: '', quantity: 0 }
  ]);

  const addToList = food => {

    const alreadyExist = todayFood.find(
      (todayItem) => todayItem.name === food.name
    );

    if (alreadyExist) {
      let duplicateQuantity = food.quantity;
      const copy = [...todayFood];
      copy.quantity += duplicateQuantity;
      setTodayFood(copy);
    } else {
      setTodayFood([...todayFood, food]);
    }
  };

  const deleteItem = (name) => {
    setTodayFood(todayFood.filter((food) => {
      return food.name !== name;
    }))
  }

  return (
    <>
      <div>
        <SearchForm
          searchedString={searchedString}
          callbackSearch={setSearchedString}
        />
      </div>
      <div className="columns">
        <div className="column">
          <div>
            <h1>Add new food </h1>
            <p>
              <button onClick={() => setClicked(!clicked)}>OK</button>
            </p>

            {clicked && <AddForm addFood={addFood} />}
          </div>
          {searchedFoods.map((food, i) => {
            return (
              <FoodBox food={food} key={food.name} addToList={addToList} />
            );
          })}
        </div>
        <div className="column">{<TodayList today={todayFood} deleteItem={deleteItem}/>}</div>
      </div>
    </>
  );
}

export default App;
