import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import { ReactComponent as Logo} from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                ):(
                    <Link className='option' to='/signin'>
                        SIGNIN
                    </Link>
                )
            }
            <CartIcon />
        </div>
        {
            hidden? null: <CartDropdown />
        }
    </div>
)

const mapStatesToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStatesToProps)(Header);