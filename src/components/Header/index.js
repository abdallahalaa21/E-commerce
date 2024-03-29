import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import { Button, Image, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CartDropDown from 'components/CartDropDown';
import {
  signInWithGoogle,
  auth
} from 'firebase/firebase.utils';
import { ReactComponent as SidebarIcon } from 'images/sidebar.svg';

const Header = ({ setToggleSideBar, toggleSideBar }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribeFromAuth = auth?.onAuthStateChanged(
      userData => {
        setUser({
          name: userData?.displayName,
          image: userData?.photoURL
        });
      }
    );
    return () => unsubscribeFromAuth();
  }, []);

  const signOut = useCallback(() => {
    auth
      .signOut()
      .then(() => setUser({}))
      .catch(error => {
        console.log({ error });
      });
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <NavLink className="navLink headerLink" to="/">
          WebSite
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <CartDropDown />
        {user?.name ? (
          <div className="d-flex align-center justify-content-center align-items-center ">
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
            <Button
              type="button"
              onClick={signOut}
              style={{ width: 'fit-content' }}
            >
              log out
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            onClick={signInWithGoogle}
            style={{ width: 'fit-content' }}
          >
            sign in with Google
          </Button>
        )}
      </Navbar.Collapse>
      <Button
        onClick={() => setToggleSideBar(prev => !prev)}
        className="ml-3"
        style={{
          width: 'fit-content',
          height: 'auto',
          fill: 'white'
        }}
        variant={toggleSideBar ? 'primary' : 'secondary'}
      >
        <SidebarIcon style={{ width: '40px' }} />
      </Button>
    </Navbar>
  );
};

Header.propTypes = {
  setToggleSideBar: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.bool.isRequired
};

export default Header;
