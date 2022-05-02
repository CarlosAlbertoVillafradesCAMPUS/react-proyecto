import React, {useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import flecha from '@icons/flechita.svg';
import AppContext from '../context/AppContext';

const MyOrder = ({toggleOrder, setToggleOrder}) => { //le ponemos como parametros los props que le pusimos en header a la etiqueta de myOrder y hacer funcionar la flecha

	const {state} = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);

		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flecha}  alt="arrow" onClick={() => setToggleOrder(!toggleOrder)} />
				<p className="title-order">My order</p>
			</div>
			<div className="my-order-content">
				<div className="the-products">
				{state.cart.map( (product, index) => (<OrderItem indexValue={index} key={index} product={product} />))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
			<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;