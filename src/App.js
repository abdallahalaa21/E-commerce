import 'bootstrap/dist/css/bootstrap.min.css';
import React, { lazy, Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  firestore,
  convertCollections
} from 'firebase/firebase.utils';
import { updateProduct } from 'redux/Products/products-actions';

const HomePage = lazy(() => import('pages/HomePage'));
const Cart = lazy(() => import('pages/Cart'));
const ProductPage = lazy(() => import('pages/ProductPage'));

const App = ({ setProducts }) => {
  useEffect(() => {
    const getData = async () => {
      const collectionref = await firestore.collection(
        'products'
      );
      await collectionref.get().then(doc => {
        setProducts(convertCollections(doc));
      });
    };
    getData();
  }, [setProducts]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense
          fallback={
            <Spinner
              animation="border"
              role="status"
              variant="primary"
              style={{ width: '50vh', height: '50vh' }}
              className="m-auto d-flex"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          }
        >
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/:id" component={ProductPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

App.propTypes = {
  setProducts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setProducts: async products =>
    dispatch(updateProduct(products))
});

export default connect(null, mapDispatchToProps)(App);
