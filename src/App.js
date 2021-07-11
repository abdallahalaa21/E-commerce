import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from 'components/ProductCard';
import Header from 'components/Header';
import products from './products';

const App = () => (
  <div className="App">
    <Header />
    <Container className="mt-4">
      <Row>
        {products.map(product => (
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            key={product.id}
            className="mb-3"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default App;
