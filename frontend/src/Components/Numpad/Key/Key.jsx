import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 50px;
  width: 80px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  flex-grow: 1;
  cursor: pointer;
`;

const Number = styled.div`
  font-size: 18px;
`;

const Symbols = styled.div`
  font-size: 16px;
  margin-left: 5px;
`;

class Key extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.symbols !== '') {
      this.props.onClickHandler();
    }
  }

  render() {
    return (
      <Container onClick={this.onClick}>
        <Number>
          {this.props.number}
        </Number>
        <Symbols>
          {this.props.symbols}
        </Symbols>
      </Container>
    );
  }
}

Key.propTypes = {
  number: PropTypes.number.isRequired,
  symbols: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Key;
