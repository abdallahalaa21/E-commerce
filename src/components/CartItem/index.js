import React from 'react';
import { Button, Dropdown, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CountInput from 'components/CountInput';
import { connect } from 'react-redux';
import { removeFromCart } from 'redux/Cart/cart-actions';

const CartItem = ({ product, removeItem }) => (
  <>
    <div className="d-flex align-center justify-content-between">
      <Image
        src={product.image}
        width="50px"
        height="50px"
        style={{ objectFit: 'cover' }}
      />
      <Button
        variant="danger"
        className="mr-4"
        onClick={() => removeItem(product.id)}
      >
        x
      </Button>
    </div>
    <p>{product.title}</p>
    <p>price: {product.price}</p>
    <CountInput qty={product.qty} id={product.id} />
    <Dropdown.Divider />
  </>
);

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  removeItem: itemId => dispatch(removeFromCart(itemId))
});

export default connect(null, mapDispatchToProps)(CartItem);
