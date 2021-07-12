/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Col,
  Container,
  Row
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { emptyCart } from 'redux/Cart/cart-actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CartItem from 'components/CartItem';
import phoneCodes from 'helpers/phoneCodes';

const orderSchema = Yup.object().shape({
  address: Yup.string().required('Required'),
  phone: Yup.number('Must be number').required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const Cart = ({ cartData, removeCart }) => {
  const totalPrice = useMemo(
    () =>
      cartData
        .reduce((acc, item) => {
          const itemTotal = item.price * item.qty;
          return acc + itemTotal;
        }, 0)
        .toFixed(2),
    [cartData]
  );

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm
  } = useFormik({
    initialValues: {
      address: '',
      phoneCode: '+20',
      phone: '',
      email: ''
    },
    onSubmit: data => {
      console.log(JSON.stringify(data, null, 2));
      removeCart();
      resetForm();
    },
    validationSchema: orderSchema
  });

  return (
    <Container className="mt-4">
      <Row>
        <Col
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          className="mb-3"
        >
          <Card
            style={{
              height: '100%'
            }}
          >
            {cartData?.length ? (
              <>
                {cartData.map(item => (
                  <CartItem product={item} key={item.id} />
                ))}
                <p> Total: {totalPrice}</p>
              </>
            ) : (
              <p>please add something to cart</p>
            )}
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              height: '100%'
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column">
                <label htmlFor="address">
                  Address:
                  <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={values.address}
                    className="w-50 ml-3 ml-3"
                  />
                </label>
                {errors.address && touched.address ? (
                  <p className="text-danger">
                    {errors.address}
                  </p>
                ) : null}
                <div className="d-flex my-4  align-content-center">
                  <label htmlFor="phone" />
                  Phone Number:
                  <select
                    name="phoneCode"
                    value={values.phoneCode}
                    onChange={handleChange}
                  >
                    {phoneCodes.map(phoneCode => (
                      <option
                        value={phoneCode.value}
                        label={phoneCode.label}
                      />
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={handleChange}
                    value={values.phone}
                    className="w-50 ml-3"
                  />
                </div>
                {errors.phone && touched.phone ? (
                  <p className="text-danger">
                    {errors.phone}
                  </p>
                ) : null}
                <label htmlFor="email">
                  Email Address:
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    className="w-50 ml-3"
                  />
                </label>
                {errors.email && touched.email ? (
                  <p className="text-danger">
                    {errors.email}
                  </p>
                ) : null}
                <Button type="submit" className="w-50 mt-4">
                  Submit
                </Button>
              </div>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  cartData: state.cart.cart
});

const mapDispatchToProps = dispatch => ({
  removeCart: itemId => dispatch(emptyCart(itemId))
});

Cart.propTypes = {
  cartData: PropTypes.array.isRequired,
  removeCart: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
