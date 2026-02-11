import { useState } from "react";

function ShopCard ({id,elem, data, setData}) {
  const [count, setCount] = useState(0);
  const {
    image,
    title,
    price,
    rating,
  } = elem;

  const handleMinusClick = () => {
    count > 0 && setCount(count - 1);
    const newData = [...data];
    newData[id] = {...elem, toCart: elem.toCart > 0 ? elem.toCart - 1 : 0};
    setData(newData);
  }
  const handlePlusClick = () => {
    setCount (count + 1);
    const newData = [...data];
    newData[id] = {...elem, toCart: elem.toCart + 1};
    setData(newData);
  }
  const handleInputChange = (e) => {
    const value = e.target.value;
    if(value >= 0) {
      setCount(e.target.value);
      const newData = [...data];
      newData[id] = {...elem, toCart: value ? parseInt(value) : 0}
      setData(newData);
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
    </div>
  )
}

export default ShopCard;