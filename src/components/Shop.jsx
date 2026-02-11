import { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import ShopCard from "./ShopCard";
function Shop () {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const {cartCount, setCartCount} = useOutletContext();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (response.ok) {
          const raw = await response.json();
          setData(raw);
        } else {
          throw new Error ("Faild to Fetch data");
        }
      } catch (error) {
        console.log(error.message)
      }
      setLoaded(true);
    }
    fetchData();
  }, []);

  return (
    <>
    {loaded && data.map((elem, index) => (
      <ShopCard data={elem} id={index} key={elem.image} cartCount={cartCount} setCartCount={setCartCount}></ShopCard>
    ))}
    </>
  )
}
export default Shop;