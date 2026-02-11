import { Link } from "react-router";
function Home () {
  return (
    <>
      <div className="left-home">
      <h2>A Delightful Shopping Experience</h2>
      <p className="hero">
        This is a small demo shopping app where you can browse products, add them to a cart, and adjust quantities in real time.
It’s designed to be fast, simple, and easy to understand.
      </p>
      <Link to="shop" className="btn">Shop Now</Link>
      </div>
      <figure className="right-home">
        <img src='/roszie-business-7408289_1920-removebg-preview.png' className="hero-img" loading="lazy" />
        <figcaption>Image by <a href="https://pixabay.com/users/roszie-6000120/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7408289">RosZie</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7408289">Pixabay</a></figcaption>
      </figure>
    </>
  )
}

export default Home;