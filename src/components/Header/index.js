import React from 'react';
import { Image, Navbar } from 'react-bootstrap';
import { ReactComponent as CartIcon } from 'images/shopping-cart.svg';

const user = {
  image: 'http://placeimg.com/640/480/people',
  name: 'Antonette'
};

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <CartIcon
        style={{
          width: '50px',
          height: 'auto',
          fill: 'white'
        }}
        className="mr-3"
      />
      <Image
        src={user?.image}
        roundedCircle
        alt={user?.name}
        className="mr-2"
        width="50px"
        height="50px"
        style={{ objectFit: 'cover' }}
      />
      <Navbar.Text className="text-light">
        {user.name}
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
