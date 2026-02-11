import { Link } from "react-router";

function NavBar ({cart}) {
  const items = cart ? cart.reduce((acc, curr) => (
    acc + curr.toCart
  ), 0)
  : 0 ;
  return (
    <nav>
      <div className="tabs" style={{gap: '1rem', display: 'flex'}}>
        <Link to="/" className="btn">Home</Link>
        <Link to="/shop" className="btn">Shop Now</Link>
        <Link to="/cart" className="btn">Cart<span className="cart-count">{items}</span></Link>
      </div>
    </nav>
  )
}
export default NavBar;