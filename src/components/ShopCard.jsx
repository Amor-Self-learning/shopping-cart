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
      <h3 className="title">{title}</h3>
      <p className="price">{`$${price}`}</p>
      <div className="add-to-cart">
        <button 
          type="button"
          onClick={handleMinusClick}
        >-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => {
            e.preventDefault();
            handleInputChange(e);
          }}
        />
        <button
          type="button"
          onClick={handlePlusClick}
        >+</button>
      </div>
      <p>{`${rating.rate} from ${rating.count} people`}</p>
      <button
        type="button"
        onClick={() => addToCart(id, elem, count)}
      >Add To Cart</button>
    </div>
  )
}

export default ShopCard;