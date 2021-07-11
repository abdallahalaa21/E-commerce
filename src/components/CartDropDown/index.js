import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

import { ReactComponent as CartIcon } from 'images/shopping-cart.svg';
import CartItem from 'components/CartItem';

const CartDropDown = () => (
  <Dropdown className="mr-3">
    <Dropdown.Toggle
      id="dropdown-cart"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      variant="secondary"
    >
      <CartIcon
        style={{
          width: '50px',
          height: 'auto',
          fill: 'white'
        }}
        className="mr-3"
      />
    </Dropdown.Toggle>

    <Dropdown.Menu
      style={{
        width: '250px',
        maxHeight: '300px',
        overflow: 'auto'
      }}
    >
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </Dropdown.Menu>
  </Dropdown>
);

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps)(CartDropDown);
