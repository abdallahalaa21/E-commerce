import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  InputGroup
} from 'react-bootstrap';

const CountInput = ({ setCount, count }) => {
  const changeCount = useCallback(
    type => {
      switch (type) {
        case '+':
          setCount(prev => prev + 1);
          break;
        case '-':
          setCount(prev => {
            if (prev <= 0) return prev;
            return prev - 1;
          });
          break;
        default:
      }
    },
    [setCount]
  );

  const changeCountTyping = useCallback(
    value => {
      setCount(prev => {
        if (Number.isNaN(Number(value)) || value < 1) {
          return prev;
        }
        return Number(value);
      });
    },
    [setCount]
  );

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button
          variant="outline-secondary"
          onClick={() => changeCount('-')}
        >
          -
        </Button>
      </InputGroup.Prepend>
      <FormControl
        aria-describedby="count"
        value={count}
        onChange={e => changeCountTyping(e.target.value)}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={() => changeCount('+')}
        >
          +
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

CountInput.propTypes = {
  setCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default CountInput;
