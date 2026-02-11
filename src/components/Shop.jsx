import { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import ShopCard from "./ShopCard";
function Shop () {
  const [loaded, setLoaded] = useState(false)
  const {data, setData, addToCart} = useOutletContext();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (response.ok) {
          const raw = await response.json();
          for (const elem of raw) {
            elem.toCart = 0;
          }
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
      <ShopCard 
        elem={elem} 
        data={data}
        setData={setData}
        id={index} 
        key={elem.image} 
        addToCart={addToCart}
      ></ShopCard>
    ))}
    </>
  )
}
export default Shop;