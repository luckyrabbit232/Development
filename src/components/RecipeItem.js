import React from "react";
import { useState } from 'react';

function RecipeItem(cart) {
    const item = cart.item; 
    const [count, setCount] = useState(0);    

    const handleadd = event =>{
        cart.addCart(cart.index);
        setCount(count + 1);
        console.log(count);
      }; 

    const handleremove = event => {
        cart.removeCart(cart.index);
        setCount(count - 1);
        console.log(count); 
        console.log("remove");
    }

    return(
        <div className= "RecipeItem">
            <img src = {item.image} className = "picture"></img>
            <div className = "Name">
                <b>{item.name}</b>
            </div>
            <div className = "Description">
               <i>{item.description}</i> 
            </div>
            <div className = "Price">
            <div><b>Ing. Price: </b></div>${item.price}
            </div>
            <div className = "Cooking_time">
                <div><b>Cooking Time:</b></div> {item.Cooking_time} min
            </div>
            <div className = "Preperation_time">
            <div><b>Preperation Time:</b></div> {item.Preperation_time} min
            </div>
            <div className = "Type">
            <div><b>Type:</b></div> {item.Type}
            </div>
            <div className = "Mealtime">
            <div><b>Meal: </b></div>{item.Mealtime}
            </div>
            {
            count == 1 ? 
            <button className = "button" onClick = {handleremove}>Remove</button> :
            <button className = "button" onClick={handleadd}>Add to Cart</button>
            }
        </div>
    )
}

export default RecipeItem;
