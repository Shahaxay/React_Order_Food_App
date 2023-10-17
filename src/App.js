import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./components/store/CartContextProvider";
function App() {
  return (
    <CartContextProvider>
        <Header />
        <Meals />
    </CartContextProvider>
  );
}

export default App;
