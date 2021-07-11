import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card
    style={{
      minWidth: '18rem',
      height: '100%'
    }}
  >
    <Card.Img
      variant="top"
      src={product?.image}
      height="400px"
      style={{ objectFit: 'contain', width: '90%' }}
      className="mx-auto"
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="text-dark">
        <NavLink to={`${product?.id}`}>
          {product?.title}
        </NavLink>
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {product?.category}
      </Card.Subtitle>
      <Card.Text className="row-12  text-truncate">
        {product?.description}
      </Card.Text>
      <Card.Text>price :{product?.price}</Card.Text>
      <Button variant="primary" className="mt-auto ">
        Go somewhere
      </Button>
    </Card.Body>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductCard;
