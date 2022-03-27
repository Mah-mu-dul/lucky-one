import React from 'react';
import Shoe from '../Shoe/Shoe';
import "./Shop.css"
import { useState } from 'react'




const Shop = () => {
    const Products = [
        { id: 1, name: 'Red Nikey', price: 90, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
        { id: 2, name: 'Red snikkers', price: 90, img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        { id: 3, name: 'woody snichrs', price: 90, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80' },
        { id: 4, name: 'creamy shoe', price: 90, img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' },
        { id: 5, name: 'Blue pancil hill', price: 90, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
        { id: 6, name: 'wheat snikers', price: 90, img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
        { id: 7, name: 'orange snikers', price: 90, img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80' },
        { id: 8, name: 'Light green snikers', price: 90, img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' },
        { id: 9, name: 'Black nikey', price: 90, img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80' },
        { id: 10, name: 'White nikey', price: 90, img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' },
        { id: 11, name: 'Plastic foot', price: 90, img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
        { id: 12, name: 'Red boot ', price: 90, img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }
    ];
    const [Card, setCard] = useState([])

    const addToCart = Product => {
        const newCart = [...Card, Product]
        setCard(newCart)

    }
    const gRandom = (Card) => {

        return Math.floor(Math.random() * Card.length)
    }
    const random = (Card) => {
        const r = gRandom(Card)
        console.log(Card[r].name);
        document.getElementById('choose').innerText = Card[r].name


    }
    const reset = () => {
        setCard([])
        document.getElementById('choose').innerText = ''


    }

    return (
        <div className="">
            <div className="shop-container">
                <div className='card-container'>
                    {
                        Products.map(product => <Shoe key={product.id} product={product} addToCart={addToCart}></Shoe>)
                    }
                </div>
                <div className="cart-container">
                    <h1>This is cart sectoin  </h1>
                    {
                        Card.map(shoe => <h1 key={shoe.id}>{shoe.name}</h1>)
                    }

                    <button className='btn' onClick={() => random(Card)}>pick  one for me  </button>
                    <button className='btn' onClick={() => reset()}>choose again </button>
                    <h1 id='choose'> </h1>

                </div>
            </div>
            <div className="optional">
                <div className="details-op">
                    <h1>How react works?</h1>
                    <p>React is a js library which works via declarative code.First in the react we make Component by jsx.And what declarative code does is it connects those Components with app(js).Which is the final result we see in the ui.</p>

                </div>
                <div className="details-op">
                    <h2>Props vs UseState</h2>
                    <p>Props is short from of property which we use to send data via declarative code and function.which means we can use data of a Component from another. Whereas useState is react hook that we use to set a initial value of a item and also a function that can set or change value of the initial value.And also we cant use a useState of a Component to another it has to be specific only to that component</p>

                </div>
            </div>
        </div>
    );
};

export default Shop;