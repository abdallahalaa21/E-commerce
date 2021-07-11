import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ReactComponent as CartIcon } from 'images/shopping-cart.svg';
import CartItem from 'components/CartItem';
import { NavLink } from 'react-router-dom';

const CartDropDown = ({ cartData }) => (
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
      {cartData.length ? (
        <>
          {cartData.map(item => (
            <CartItem product={item} key={item.id} />
          ))}
          <NavLink className="navLink" to="/cart">
            <p className="w-100 text-center bg-primary p-3">
              view details
            </p>
          </NavLink>
        </>
      ) : (
        <p className="text-center"> nothing added yet</p>
      )}
    </Dropdown.Menu>
  </Dropdown>
);

const mapStateToProps = state => ({
  cartData: state.cart.cart
});

CartDropDown.propTypes = {
  cartData: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CartDropDown);
