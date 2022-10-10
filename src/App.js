import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCarthandler = () => {
    setCartIsShown(true);
  };
  const hideCarthandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCarthandler} />
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
