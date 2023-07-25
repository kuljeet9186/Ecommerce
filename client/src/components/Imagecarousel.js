import React from "react";
import Mycard from "./Mycard.js";
import useCategory from "../hooks/useCategory";
import "../Styles/SliderStyle.css";
import "./Imagecarousel.css";
import { Link } from "react-router-dom";
const Imagecarousel = () => {
  const categories = useCategory();
  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      

      <div className="product-container">
        {categories.map((c) => (
          <div>
            <div class="imagex">
              <img src="https://i.pinimg.com/originals/60/b0/a4/60b0a4ee7e032a6281444a82705a665c.jpg" />

              <div class="Buttonx">
                <Link to={`/category/${c.slug}`}>{c.name}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>

      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>
    </div>
  );
};

export default Imagecarousel;
