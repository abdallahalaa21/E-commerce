import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  InputGroup
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  incrementItemQty,
  decrementItemQty,
  adjustItemQty
} from 'redux/Cart/cart-actions';

const CountInput = ({
  increaseQty,
  decreaseQty,
  changeQty,
  id,
  qty
}) => (
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button
        variant="outline-secondary"
        onClick={() => decreaseQty(id)}
      >
        -
      </Button>
    </InputGroup.Prepend>
    <FormControl
      aria-describedby="count"
      value={qty}
      onChange={e => changeQty(id, e.target.value)}
    />
    <InputGroup.Append>
      <Button
        variant="outline-secondary"
        onClick={() => increaseQty(id)}
      >
        +
      </Button>
    </InputGroup.Append>
  </InputGroup>
);

CountInput.propTypes = {
  increaseQty: PropTypes.func.isRequired,
  decreaseQty: PropTypes.func.isRequired,
  changeQty: PropTypes.func.isRequired,
  qty: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

const mapDispatchToProps = dispatch => ({
  increaseQty: itemId => dispatch(incrementItemQty(itemId)),
  decreaseQty: itemId => dispatch(decrementItemQty(itemId)),
  changeQty: (itemId, qty) =>
    dispatch(adjustItemQty(itemId, qty))
});

export default connect(
  null,
  mapDispatchToProps
)(CountInput);
