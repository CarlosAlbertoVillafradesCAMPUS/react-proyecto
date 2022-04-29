import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
	const {AddToCart} = useContext(AppContext);

	const handleClick = (item) => {  //hnadle se utiliza para una funcion despues d eun evento y siempre va con el nombre de handle + el evento
		AddToCart(item);
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
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;