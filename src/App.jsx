import { useState } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import NavBar from "./components/Nav";
import './App.css'
function App () {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (id, elem, count) => {
    const [oldElem] = cart.filter(e => e.id === id);
    let newCart = [...cart];
    if (oldElem) {
      oldElem.toCart += count;
      newCart[id] = oldElem;
    } else {
      elem.id = id;
      elem.toCart = count;
      newCart = [...cart, elem]
    }
    setCart(newCart)
  }

  const handleDel = (id) => {
    const newCart = cart.filter(e => e.id !== id);
    setCart(newCart);
  }

  const mainClass = useLocation().pathname;

  return (
    <>
      <NavBar cart={cart} />
      <main id="main" className={mainClass}>
        <Outlet context={{addToCart,cart, handleDel, data, setData}} />
      </main>
    </>
  )
}

export default App;