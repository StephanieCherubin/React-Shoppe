import React from 'react';

const Product = (props) => { // props.title props.price
    const {title, description, price } = props
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>${price}</p>
            <p></p>
        </div>
    )
}

export default Product

//<Product title={} desc={} price={}