import React from 'react';
import { Image, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartDropDown from 'components/CartDropDown';

const user = {
  image: 'http://placeimg.com/640/480/people',
  name: 'Antonette'
};

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <NavLink className="navLink headerLink" to="/">
        WebSite
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <CartDropDown />
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
