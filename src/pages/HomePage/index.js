import ProductCard from 'components/ProductCard';
import React, { useMemo, useState } from 'react';
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Row
} from 'react-bootstrap';
import { ReactComponent as SearchIcon } from 'images/search.svg';
import useDebounce from 'helpers/useDebounce';
import productsData from 'static/products';

const HomePage = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const debouncedSearchTerm = useDebounce(searchTxt, 500);

  const products = useMemo(
    () =>
      productsData.filter(product =>
        product.title
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      ),
    [debouncedSearchTerm]
  );

  return (
    <Container className="mt-4">
      <Row>
        <InputGroup className="mb-3 w-50 mx-auto">
          <InputGroup.Prepend>
            <InputGroup.Text id="search">
              <SearchIcon height="100%" width="20px" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="search products"
            aria-label="search products"
            aria-describedby="search"
            value={searchTxt}
            onChange={e => setSearchTxt(e.target.value)}
          />
        </InputGroup>
      </Row>
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
};

export default HomePage;
