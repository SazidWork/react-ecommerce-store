import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>

      <h1>My React Ecommerce Store</h1>

      <Products addToCart={addToCart} />

      <Cart cart={cart} />

    </div>
  );
}

export default App;
