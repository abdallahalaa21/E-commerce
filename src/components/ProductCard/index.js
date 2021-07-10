import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

const ProductCard = ({ product }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product?.image} />
    <Card.Body>
      <Card.Title>{product?.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {product?.category}
      </Card.Subtitle>
      <Card.Text>{product?.description}</Card.Text>
      <Card.Text>price :{product?.price}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductCard;
