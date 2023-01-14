import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);
  const toggleShowCart = ()=>{
    setShowCart(prev=>!prev);
  };
  return (
    <div>
      {showCart&&<Cart toggleShowCart={toggleShowCart}/>}
      <Header toggleShowCart={toggleShowCart}/>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
