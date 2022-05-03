import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu.jsx';
import MenuMobile from './MenuMobile';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg';
import flecha from '@icons/flechita.svg';

const Header = () => {

	const {state} = useContext(AppContext);

	const [toggle, setToggle] = useState(false);
	const [toggleOrder, setToggleOrder] = useState(false);
	const [toggleMenuM, setToggleMenuM] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}
	return (
		<nav>
			<img src= {iconMenu} alt="menu" className="menu" onClick={() => setToggleMenuM(!toggleMenuM)} />
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
					<li className="navbar-shopping-cart" onClick={() => setToggleOrder(!toggleOrder)} >
						<img src= {shoppingCart} alt="shopping cart" />
						{state.cart.length > 0  ?<div>{state.cart.length}</div> :null }
					</li>
				</ul>
			</div>
			{toggleMenuM && <MenuMobile toggleMenuM={toggleMenuM} setToggleMenuM={setToggleMenuM} />}
			{toggle && <Menu />}
			{toggleOrder && <MyOrder toggleOrder={toggleOrder} setToggleOrder={setToggleOrder} />} {/*aqui le estamos pasando estos propos para poderlos utilizar en la carpeta de myOrder y hacer funcionar la flecha de close*/ } 
		</nav>	
	);
}

export default Header;