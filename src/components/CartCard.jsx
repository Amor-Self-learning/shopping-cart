function CartCard ({elem, handleDel, id}) {
  const {
    images,
    title,
    price,
    description,
  } = elem;

  return (
    <div className="card cart-card">
      <img src={images[0]} alt={title} loading="lazy" />
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
      <p className="price">{`$${price}`}</p>
      <p>Items: {elem.toCart}</p>
      <p>Total: {`$${price * elem.toCart}`}</p>
      <button
        className="btn del-btn"
        onClick={ () => handleDel(id)}
      >Delete Item</button>
    </div>
  )
}

export default CartCard;