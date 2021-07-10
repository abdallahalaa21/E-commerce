import React, { useCallback, useState } from 'react';
import {
  Button,
  Dropdown,
  FormControl,
  Image,
  InputGroup
} from 'react-bootstrap';

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

  const changeCount = useCallback(type => {
    switch (type) {
      case '+':
        setCount(prev => prev + 1);
        break;
      case '-':
        setCount(prev => {
          if (prev <= 0) return prev;
          return prev - 1;
        });
        break;
      default:
    }
  }, []);

  const changeCountTyping = useCallback(value => {
    setCount(prev => {
      if (Number.isNaN(Number(value)) || value < 1) {
        return prev;
      }
      return Number(value);
    });
  }, []);

  return (
    <>
      <Image
        src={product.image}
        width="50px"
        height="50px"
        style={{ objectFit: 'cover' }}
      />
      <p>{product.title}</p>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button
            variant="outline-secondary"
            onClick={() => changeCount('-')}
          >
            -
          </Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="count"
          value={count}
          onChange={e => changeCountTyping(e.target.value)}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => changeCount('+')}
          >
            +
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Dropdown.Divider />
    </>
  );
};

export default CartItem;
