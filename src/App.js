import 'bootstrap/dist/css/bootstrap.min.css';
import React, { lazy, Suspense } from 'react';
import Header from 'components/Header';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from 'redux/store';

const HomePage = lazy(() => import('pages/HomePage'));
const Cart = lazy(() => import('pages/Cart'));
const ProductPage = lazy(() => import('pages/ProductPage'));

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
