import { useState } from "react";

function ShopCard ({id,elem, addToCart}) {
  const [count, setCount] = useState(0);
  const {
    image,
    title,
    price,
    rating,
  } = elem;
  const handleMinusClick = () => {
    count > 0 && setCount(count - 1);
  }
  const handlePlusClick = () => {
    setCount (count + 1);
  }
  const handleInputChange = (e) => {
    if (!Number.isNaN(e.target.value)) {
      const value = parseInt(e.target.value);
      value >= 0 && setCount(value);
    }
  }
  return (
    <div className="card shop-card">
      <img src={image} alt={title} loading="lazy"/>
      <h4 className="title">{title}</h4>
      <p className="price">{`$${price}`}</p>
      <div className="add-to-cart">
        <button 
          type="button"
          onClick={handleMinusClick}
          className="btn"
        >-</button>
        <input
          type="number"
          value={count}
          className="btn"
          onChange={(e) => {
            e.preventDefault();
            handleInputChange(e);
          }}
        />
        <button
          type="button"
          onClick={handlePlusClick}
          className="btn"
        >+</button>
      </div>
      <p>{`${rating.rate} ⭐ from ${rating.count} people`}</p>
      <button
        type="button"
        onClick={() => addToCart(id, elem, count)}
        className="btn"
      >Add To Cart</button>
    </div>
  )
}

export default ShopCard;