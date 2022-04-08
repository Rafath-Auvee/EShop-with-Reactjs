import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { name,img, price, shipping, quantity } = props.product;
  return (
    <div className="review-item">
      {/* Product Item Name: {name} */}
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
            <p className="product-name">
                {name}
            </p>
            <p>price <span className="orange-color">{price}</span> </p>
        </div>
        <div className="delete-container">
            <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
