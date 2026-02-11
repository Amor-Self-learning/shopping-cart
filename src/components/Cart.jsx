import { useOutletContext } from "react-router";
import CartCard from "./CartCard";
function Cart () {
  const {cart, handleDel, addToCart} = useOutletContext();
  return (
    <>
      {cart.length > 0 
      ? cart.map((elem, id) => (
        <CartCard 
          id={id} 
          elem={elem} 
          key={elem.image}
          addToCart={addToCart}
          handleDel={handleDel}
        ></CartCard>
      ))
      : <h3>Start Shopping to see here.</h3>
    }
    </>
  )
}
export default Cart;