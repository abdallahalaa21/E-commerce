import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from 'components/CartItem';

const Sidebar = ({ cartData }) => {
  const totalPrice = useMemo(
    () =>
      cartData
        .reduce((acc, item) => {
          const itemTotal = item.price * item.qty;
          return acc + itemTotal;
        }, 0)
        .toFixed(2),
    [cartData]
  );
  return (
    <div
      style={{
        height: '100%',
        width: '200px',
        position: 'absolute',
        right: 0,
        borderLeft: 'solid 1px gray',
        padding: '5px 15px',
        backgroundColor: 'white'
      }}
    >
      {cartData?.length ? (
        <>
          <p> Total: {totalPrice}</p>
          {cartData.map(item => (
            <CartItem product={item} key={item.id} />
          ))}
        </>
      ) : (
        <p className="text-center"> nothing added yet</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  cartData: state.cart.cart
});

Sidebar.propTypes = {
  cartData: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Sidebar);
