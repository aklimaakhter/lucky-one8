import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;