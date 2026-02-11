import { useState } from "react";

function CartCard ({elem, handleDel, id, addToCart}) {
  const [count, setCount] = useState(elem.toCart);
  const {
    image,
    title,
    price,
    description,
  } = elem;

  const handleMinusClick = () => {
    count > 1 && setCount(count - 1) && addToCart(id, elem, count);
  }
  const handlePlusClick = () => {
    setCount (count + 1);
    addToCart(id, elem, count)
  }
  console.log(count, typeof count)
  return (
    <div className="card cart-card">
      <img src={image} alt={title} loading="lazy" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <p className="price">{`$${price}`}</p>
      <p>Total: {`$${price * count}`}</p>
      <div className="add-remove">
        <button 
          type="button"
          onClick={handleMinusClick}
        >-</button>
        <button
          type="button"
          onClick={handlePlusClick}
        >+</button>
      </div>
      <button
        className="del-btn"
        onClick={ () => handleDel(id)}
      >Delete Item</button>
    </div>
  )
}

export default CartCard;