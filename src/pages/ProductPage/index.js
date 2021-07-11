import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Col,
  Container,
  Image,
  Row,
  Button
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addToCart } from 'redux/Cart/cart-actions';

const ProductPage = ({ addItem }) => {
  const { id } = useParams();

  const product = useSelector(({ products }) =>
    products.products.find(
      productEle => productEle.id === Number(id)
    )
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} sm={12} md={5} lg={6} xl={6}>
          <Image
            src={product.image}
            alt={product.name}
            height="350px"
            style={{
              objectFit: 'contain',
              width: '100%',
              margin: 'auto'
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={7} lg={6} xl={6}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <p>Name: {product.title}</p>
              <p>Description: {product.description}</p>
              <p>price: {product.price}</p>
              <div className="d-flex mt-auto">
                <Col>
                  <Button
                    variant="primary"
                    className="w-75"
                    onClick={() => addItem(id)}
                  >
                    add to cart
                  </Button>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: itemId => dispatch(addToCart(itemId))
});

ProductPage.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(ProductPage);
