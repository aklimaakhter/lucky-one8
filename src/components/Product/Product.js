import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, price, img } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""></img>

                <div className='product-info'>
                    <h2 className='product-name'>{name}</h2>
                    <p><small>Id :{id}</small></p>
                    <p>Price :{price}</p>
                </div>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;