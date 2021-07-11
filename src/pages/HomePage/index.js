import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Row
} from 'react-bootstrap';

import { ReactComponent as SearchIcon } from 'images/search.svg';
import ProductCard from 'components/ProductCard';
import { searchProduct } from 'redux/Products/products-actions';
import useDebounce from 'helpers/useDebounce';

const HomePage = ({ products, searchProductFunc }) => {
  const [searchTxt, setSearchTxt] = useState('');
  const debouncedSearchTerm = useDebounce(searchTxt, 500);
  useEffect(
    () => searchProductFunc(debouncedSearchTerm),
    [searchProductFunc, debouncedSearchTerm]
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
        {products?.map(product => (
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

HomePage.propTypes = {
  products: PropTypes.array.isRequired,
  searchProductFunc: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products.filteredProducts
});

const mapDispatchToProps = dispatch => ({
  searchProductFunc: value => dispatch(searchProduct(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
