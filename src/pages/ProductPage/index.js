import React, { useState } from 'react';
import {
  Card,
  Col,
  Container,
  Image,
  Row,
  Button
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountInput from 'components/CountInput';

const ProductPage = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);

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
                <Col xs={6} lg={4} xl={4}>
                  <CountInput
                    count={count}
                    setCount={setCount}
                  />
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    className="w-75"
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

export default ProductPage;
