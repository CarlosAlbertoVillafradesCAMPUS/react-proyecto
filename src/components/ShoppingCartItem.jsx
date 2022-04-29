import React from 'react';
import '@styles/ShoppingCartItem.scss';

const ShoppinCartItem = () => {
    return (
        <div className="ShoppingCartItem">
        <figure>
            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
    </div>

    );
}

export default ShoppinCartItem;