import { useState } from "react";

function ShopCard ({data, cartCount, setCartCount}) {
  const [count, setCount] = useState(0);
  const {
    image,
    title,
    price,
    rating,
  } = data;

  const handleMinusClick = () => {
    count > 0 && setCount(count - 1);
    setCartCount(cartCount - 1);
  }
  const handlePlusClick = () => {
    setCount (count + 1);
    setCartCount(cartCount + 1);
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
            setCount(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={handlePlusClick}
        >+</button>
      </div>
      <p>{`${rating.rate} from ${rating.count} people`}</p>
    </div>
  )
}

export default ShopCard;