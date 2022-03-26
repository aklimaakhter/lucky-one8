import React from 'react';

const Product = (props) => {
    const { id, name, price, img } = props.product;
    return (
        <div>
            <img src={img} alt=""></img>
            <p>{name}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Product;