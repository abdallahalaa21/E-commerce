import ProductCard from 'components/ProductCard';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import products from 'static/products';

const HomePage = () => (
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
);

export default HomePage;
