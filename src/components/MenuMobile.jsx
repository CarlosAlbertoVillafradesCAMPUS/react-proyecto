import React from 'react';
import close from '../assets/icons/icon_close.png';
import '@styles/MenuMobile.scss';

const MenuMobile = () => {
    return (
     <div className="movil-menu">
         <img src={close} alt="close" />
        <ul className="principal">
            <li>
                <a href="/">CATEGORIES</a>
            </li>
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
        <ul className='setting'>
            <li>
                <a href="/">My orders</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/" className="email-menu-m">Cavillafrades@gmail.com</a>
            </li>
            <li>
                <a href="/" className="sign-out-menu-m">Sign out</a>
            </li>
        </ul>
     </div>

    )
}

export default MenuMobile;