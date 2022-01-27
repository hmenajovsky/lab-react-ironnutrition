import React, {useState} from 'react';

const AddForm = ({ addFood }) => {
  const [name, setName] = useState("");
  const [calories, setcalories] = useState(0);
  const [image, setImage] = useState("");


  const handleSubmit = event => {
    event.preventDefault();
    const food = { name: name, calories: calories, image: image };
    addFood(food);
  };
  return (    

    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <label htmlFor="calories">calories</label>
      <input
        type="text"
        name="calories"
        id="email"
        value={calories}
        onChange={(e) => setcalories(e.target.value)}
      />
      <label htmlFor="image">calories</label>
      <input
        type="text"
        name="image"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
};

export default AddForm;
