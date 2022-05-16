import React from 'react'
import "../styles/ProductReviewCart.css"
const ProductReviewCart = ({price, name, index, image, review}) => {
  return (
    <div className="ProductReviewCart">
        <img src = {image} alt = {`${index} review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCart