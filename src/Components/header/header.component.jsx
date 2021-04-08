/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : header.component.jsx
 *******************************************/
//React, Redux, and other core libraries
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

//Styles
import './header.styles.scss';

//Misc
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

const Header =({ currentUser, hidden })=>(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon/>
        </div>
        { hidden ? null : <CartDropdown/> }
    </div>
);

const mapStatetoProps = ({ user: { currentUser }, cart:{ hidden }}) =>({
    currentUser,
    hidden
});

export default connect(mapStatetoProps)(Header);