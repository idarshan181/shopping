import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import React from 'react';

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
            <span className='item-count'>0</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);