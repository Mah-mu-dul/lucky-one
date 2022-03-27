import React from 'react';
import "./Shoe.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Shoe = (props) => {
    const { addToCart, product } = props
    const { id, name, price, img } = product
    return (
        <div className='card-container'>
            <div className="card">
                <img className='img' src={img} alt="" />
                <div className="details">
                    <h1>{name}</h1>
                    <p>price: ${price}</p>
                    <button className='btn' onClick={() => addToCart(product)}>add to cart   <FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Shoe;
