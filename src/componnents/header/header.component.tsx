import React from 'react';
import './header.styles.scss'
import {Link} from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/'>Contact</Link>
            </div>
        </div>
    );
};

export default Header;
