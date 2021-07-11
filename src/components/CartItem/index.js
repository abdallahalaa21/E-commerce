import React, { useState } from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import CountInput from 'components/CountInput';

const product = {
  title:
    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  image:
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  count: 1
};

const CartItem = () => {
  const [count, setCount] = useState(9);

  return (
    <>
      <Image
        src={product.image}
        width="50px"
        height="50px"
        style={{ objectFit: 'cover' }}
      />
      <p>{product.title}</p>
      <CountInput count={count} setCount={setCount} />
      <Dropdown.Divider />
    </>
  );
};

export default CartItem;
