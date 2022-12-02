import React from "react";

function CartItems(cart){
    return (
        <div>
            <p>
                {cart.cartItem.name}
                {cart.count}
            </p>
        </div>
    )
}

  export default CartItems;
