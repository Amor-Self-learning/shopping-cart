import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "./components/Nav";
function App () {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const calculateCartCount = () => {
    return data.reduce((total, elem) => {
      return total + elem.toCart
    }, 0)
  }

  const addToCart = (id, elem, count) => {
    const [newElem] = cart.filter(e => e.id === id);
    if (newElem) {
      newElem.toCart += count;
    } else {
      elem.id = id;
      elem.toCart = count;
      const newCart = [...cart, elem]
      setCart(newCart);
    }
  }

  const handleDel = (id) => {
    const newCart = cart.filter(e => e.id !== id);
    setCart(newCart);
  }

  return (
    <>
      <div id="main">
        <NavBar count={calculateCartCount()} />
        <Outlet context={{addToCart,cart, handleDel, data, setData}} />
      </div>
    </>
  )
}

export default App;