import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';
import addedCart from '@icons/bt_added_to_cart.svg'
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
	const {AddToCart, removeFromCart, state} = useContext(AppContext);
	const itsProductAdded = () => //aqui creameos una funcion que nos compare los productos haber si son los mismo o no, con el ID
    state.cart.some((item) => item.id === product.id) ? true : false;

	const handleClick = (item) => {  //hnadle se utiliza para una funcion despues d eun evento y siempre va con el nombre de handle + el evento
		itsProductAdded() ? removeFromCart(item) : AddToCart(item); 
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]}  alt={product.title} className="image-product" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					{itsProductAdded() ? (<img src={addedCart} alt='addedcart' className='added-cart'/>) : (<img src={addToCart} alt='addcart' className='add-cart' />)}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;