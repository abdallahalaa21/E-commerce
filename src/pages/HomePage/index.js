import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Row,
  Button,
  Table
} from 'react-bootstrap';

import { ReactComponent as SearchIcon } from 'images/search.svg';
import { ReactComponent as ListIcon } from 'images/list.svg';
import { ReactComponent as GridIcon } from 'images/grid.svg';

import ProductCard from 'components/ProductCard';
import {
  searchProduct,
  updateProduct
} from 'redux/Products/products-actions';
import useDebounce from 'helpers/useDebounce';
import { NavLink } from 'react-router-dom';
import {
  firestore,
  convertCollections
} from 'firebase/firebase.utils';

const HomePage = ({
  products,
  searchProductFunc,
  setProducts
}) => {
  const [searchTxt, setSearchTxt] = useState('');
  const [isList, setIsList] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTxt, 500);
  useEffect(
    () => searchProductFunc(debouncedSearchTerm),
    [searchProductFunc, debouncedSearchTerm]
  );

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
    <Container className="mt-4">
      <Row className="mb-3">
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
        <Button
          onClick={() => setIsList(true)}
          className="mr-3"
          variant={isList ? 'primary' : 'secondary'}
        >
          <ListIcon
            style={{ width: '30px', fill: 'white' }}
          />
        </Button>
        <Button
          onClick={() => setIsList(false)}
          variant={!isList ? 'primary' : 'secondary'}
        >
          <GridIcon
            style={{ width: '30px', fill: 'white' }}
          />
        </Button>
      </Row>
      <Row>
        {isList ? (
          <Table responsive>
            <tbody>
              {products.map(product => (
                <NavLink
                  className="navLink"
                  to={`${product?.id}`}
                >
                  <tr key={product.id}>
                    <td>
                      <Image
                        src={product.image}
                        width="100px"
                      />
                    </td>
                    <td>
                      <tr>{product.title}</tr>
                      <tr>{product.description}</tr>
                    </td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                  </tr>
                </NavLink>
              ))}
            </tbody>
          </Table>
        ) : (
          <>
            {' '}
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
          </>
        )}
      </Row>
    </Container>
  );
};

HomePage.propTypes = {
  products: PropTypes.array.isRequired,
  searchProductFunc: PropTypes.func.isRequired,
  setProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products.filteredProducts
});

const mapDispatchToProps = dispatch => ({
  searchProductFunc: value =>
    dispatch(searchProduct(value)),
  setProducts: async products =>
    dispatch(updateProduct(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
