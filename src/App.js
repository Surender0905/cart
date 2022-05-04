import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openModal = () => {
    setShowCart(true);
  };

  const closeModal = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={closeModal} />}
      <Header onShowCart={openModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
