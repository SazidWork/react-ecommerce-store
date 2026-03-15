import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div>

      <h1>My React Ecommerce Store</h1>

      <Products addToCart={addToCart} />

      <Cart cart={cart} removeFromCart={removeFromCart} />

    </div>
  );
}

export default App;
