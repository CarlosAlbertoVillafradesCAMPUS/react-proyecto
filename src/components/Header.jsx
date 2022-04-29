import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu.jsx';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg';
import flecha from '@icons/flechita.svg';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

const Header = () => {

	const {state} = useContext(AppContext);

	const [toggle, setToggle] = useState(false);
	const [toggleOrder, setToggleOrder] = useState(false);

	const handleToggleOrder = () =>{
		setToggleOrder(!toggleOrder);
	}
	const handleToggle = () => {
		setToggle(!toggle);
	}
	return (
		<nav>
			<img src= {iconMenu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src= {logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<div className='email-arrow' onClick={handleToggle}>
					<li className="navbar-email">YardSale@example.com</li>
					<img src={flecha} alt="arrow"  className="arrow-menu" />
					</div>
					<li className="navbar-shopping-cart" onClick={handleToggleOrder}>
						<img src= {shoppingCart} alt="shopping cart" />
						{state.cart.length > 0  ?<div>{state.cart.length}</div> :null }
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrder && <MyOrder />}
		</nav>
	);
}

export default Header;