import React from 'react'
import ProductReviewCart from "./ProductReviewCart.js"
import "../styles/ProductReviews.css"
const ProductReviews = ({productReviews}) => {
  return (
    <div className = "ProductReviews">
        {productReviews.map((item, index)=>(
            <ProductReviewCart price ={item.price} name = {item.name} image ={item.image} review = {item.review} key = {item.image} index = {index}  />
        ))}
    </div>
  )
}

export default ProductReviews