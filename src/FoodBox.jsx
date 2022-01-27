import React, {useState} from 'react'; 

const FoodBox = props => {
  const { food, addToList } = props;
  
  const [number, setNumber] = useState(1);

  const updateQuantity = (quantity) => {
    console.log(quantity);
    food.quantity = quantity 
    setNumber(quantity);
  }

  return (
    <>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" placeholder="1" onChange={(e) => updateQuantity(e.target.value)}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => addToList(food)}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default FoodBox;
