import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Key from './Key';
import DeleteKey from './Key/DeleteKey';

const Container = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  flex-wrap: wrap;
`;

class Numpad extends Component {
  render() {
    return (
      <Container>
        {this.props.keys.map(key => (
          <Key
            key={key.number}
            number={key.number}
            symbols={key.symbols}
            onClickHandler={() => { this.props.onClickNumberHandler(key.number); }}
          />
        ))}
        <DeleteKey onClickHandler={this.props.clearNumberString} />
      </Container>
    );
  }
}

Numpad.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    symbols: PropTypes.string,
  })).isRequired,
  onClickNumberHandler: PropTypes.func.isRequired,
  clearNumberString: PropTypes.func.isRequired,
};

export default Numpad;
