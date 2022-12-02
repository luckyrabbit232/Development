import './css/App.css';
import data from './assets/cooking-data.json'
import RecipeItem from './components/RecipeItem'
import CartItem from './components/CartItems'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  // Create a cart
  const [newCart, setcart] = useState(Array(data.length).fill(0));
  const [displayRecipe, setDisplayRecipe] = useState(data);

  const [Type, setType] = useState('All');
  const [Meal, mealType] = useState('All');
  const [sort, sortType] = useState("All");

  const resetHandler = () =>{
    setcart(Array(data.length).fill(0));
    setDisplayRecipe(data);
    setType('All');
    mealType('All');
    displayRecipe.sort(function(a,b){return a.price-b.price});
    document.getElementById('AllSort').checked = true;
    document.getElementById('AllType').checked = true;
    document.getElementById('AllMeal').checked = true;

  }

  const addCart = (item) =>{
    const cart = [...newCart];
    cart[item]++;
    setcart(cart);
    console.log(cart);

  }

  const removeCart = (item) => {
    const cart = [...newCart]
    console.log(item);
    cart[item]--; 
    setcart(cart);
    console.log(cart);
  }

  // Do sorting
  const sorting = (heirarchy) => {
    const sortingMethod = heirarchy.target.value;
    console.log(sortingMethod);
    console.log(displayRecipe);
    sortType(sortingMethod);
    if (sortingMethod == "price"){
      displayRecipe.sort(function(a,b){return a.price-b.price});
    } else if (sortingMethod == "Cooking_Time"){
      displayRecipe.sort(function(a,b){return a.Cooking_time - b.Cooking_time});
    } else{
      displayRecipe.sort(function(a,b){return a.Preperation_time - b.Preperation_time});
    }
  }

  // use this function to add and remove types from each item on form press
  const selectFilterType = (hierarchy) =>{
    setType(hierarchy.target.value); 
  }

  const selectMealType = (hierarchy) =>{
    mealType(hierarchy.target.value); 
  }

  const matchesFilterType  = (item) => {
    if (Type == "All"){
      return true;
    } else if (Type == item.Type) {
      return item.Type;
    } else {
      return false; 
    }
  }

  const matchesMealType = (item) => {
    if (Meal == "All"){
      return true;
    } else if (Meal == item.Mealtime) {
      return item.Type;
    } else {
      return false; 
    }
  }

  return (
    <div className="App">
      <div className = "Logo">
        <img src = "./images/Chef.png" className = "Logo_Image"></img>
        <h2> The Cooking Plan</h2>
      </div>

      <div className = "Content">

        <div className = "filter_Section">
          <div  className = "sortContainer">
            <h2>Sort By: </h2> 
            <Form>
              {['radio'].map((type) =>(
                <div key = {`default-${type}`} className = "form">
                  <Form.Check
                    type = {type}
                    id = {`AllSort`}
                    label = "All"
                    name = "group1"
                    value = "All"
                    onChange={sorting}
                    defaultChecked
                  />

                  <Form.Check
                    type = {type}
                    id = {`price`}
                    label = "Price"
                    name = "group1"
                    value = "price"
                    onChange={sorting}
                  />

                  <Form.Check
                    type = {type}
                    id = {`Cooking_Time`}
                    label = "Cooking Time"
                    name = "group1"
                    value = "Cooking_Time"
                    onChange={sorting}
                  />

                  <Form.Check
                    type = {type}
                    id = {`Preperation_Time`}
                    label = "Preperation Time"
                    name = "group1"
                    value = "Preperation_Time"
                    onChange={sorting}
                  />
                </div>
              ))}
            </Form>

          </div>
          <div className = "typesContainer">
            <h2>Types: </h2> 
            <Form>
              {['radio'].map((type) =>(
                <div key = {`default-${type}`} className = "form">
                  <Form.Check
                    type = {type}
                    id = {`AllType`}
                    label = "All"
                    name = "group2"
                    value = "All"
                    onChange = {selectFilterType}
                    defaultChecked
                  />
                  <Form.Check
                    type = {type}
                    id = {`Vegetables`}
                    label = "Vegetables"
                    name = "group2"
                    value = "Vegetables"
                    onChange = {selectFilterType}
                  />

                  <Form.Check
                    type = {type}
                    id = {`Stew`}
                    label = "Stew"
                    name = "group2"
                    value = "Stew"
                    onChange = {selectFilterType}
                  />

                  <Form.Check
                    type = {type}
                    id = {`Poultry`}
                    label = "Poultry"
                    name = "group2"
                    value = "Poultry"
                    onChange = {selectFilterType}
                  />

                  <Form.Check
                    type = {type}
                    id = {`Poultry`}
                    label = "Fish"
                    name = "group2"
                    value = "Fish"
                    onChange = {selectFilterType}
                  />

                  <Form.Check
                    type = {type}
                    id = {`Beef`}
                    label = "Beef"
                    name = "group2"
                    value = "Beef"
                    onChange = {selectFilterType}
                  />

                  <Form.Check
                    type = {type}
                    id = {`Desserts`}
                    label = "Desserts"
                    name = "group2"
                    value = "Desserts"
                    onChange = {selectFilterType}
                  />
                </div>
              ))}
            </Form>
          </div>
          <div className = "mealContainer">
            <h2>Meal: </h2>
            <Form>
              {['radio'].map((type) =>(
                <div key = {`default-${type}`} className = "form">
                  <Form.Check
                    type = {type}
                    id = {`AllMeal`}
                    label = "All"
                    name = "group3"
                    value = "All"
                    onChange = {selectMealType}
                    defaultChecked

                  />

                  <Form.Check
                    type = {type}
                    id = {`breakfast`}
                    label = "Breakfast"
                    name = "group3"
                    value = "Breakfast"
                    onChange = {selectMealType}

                  />

                  <Form.Check
                    type = {type}
                    id = {`Lunch`}
                    label = "Lunch"
                    name = "group3"
                    value = "Lunch"
                    onChange = {selectMealType}


                  />

                  <Form.Check
                    type = {type}
                    id = {`dinner`}
                    label = "Dinner"
                    name = "group3"
                    value = "Dinner"
                    onChange = {selectMealType}


                  />
                </div>
              ))}
            </Form>
          </div>
            <button className = "resetbutton" onClick = {resetHandler}>Reset Selection</button> :
        </div>  





        <div className = "item_Section">
          <div className = "child_Item">
            {displayRecipe.map((item, index) =>(
              matchesFilterType(item) &&
              matchesMealType(item) &&
              <RecipeItem
                item = {item}
                index = {index}
                addCart = {addCart}
                removeCart = {removeCart} 
              />
            ))}
          </div>
        </div>



        <div className = "cartSection">
          <div className = "cart_Items">
            <h2>Chosen Recipes:</h2>
            <i>{newCart.map((count, index) => count? <CartItem cartItem = {data[index]}/> :<></>)}</i>
          </div>         
          <div className = "cart_Price">
            <b>Price:</b>  
            ${(newCart.reduce((a,b,index) => {
          return a + b*data[index].price},0)).toFixed(2)}       
          </div>
          <div className = "cart_preperationTime">
            <b>Preperation Time: </b>
            {(newCart.reduce((a,b,index) => {
          return a + b*data[index].Preperation_time},0))} min 
          </div>
          <div className = "cart_cookingTime">
            <b>Cooking Time: </b>
            {(newCart.reduce((a,b,index) => {
          return a + b*data[index].Cooking_time},0))} min
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
