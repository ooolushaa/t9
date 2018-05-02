import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Key from './Key/Key';
import DeleteKey from './Key/DeleteKey';

const Container = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  flex-wrap: wrap;
`;

const Numpad = ({ keys, clearNumberString, onClickNumberHandler }) => (
  <Container>
    {keys.map(key => (
      <Key
        key={key.number}
        number={key.number}
        symbols={key.symbols}
        onClickHandler={() => { onClickNumberHandler(key.number); }}
      />
    ))}
    <DeleteKey onClickHandler={clearNumberString} />
  </Container>
);

Numpad.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    symbols: PropTypes.string,
  })).isRequired,
  onClickNumberHandler: PropTypes.func.isRequired,
  clearNumberString: PropTypes.func.isRequired,
};

export default Numpad;
