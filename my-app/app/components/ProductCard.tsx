import React from "react"
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
    return (
        <div className={styles.card}>
             <AddToCart />
             <div className="p-5 my-5 bg-sky-400 text-red-950 text-xl ">
                <p>thsi is text</p>
             </div>
        </div>

    )
}

export default ProductCard