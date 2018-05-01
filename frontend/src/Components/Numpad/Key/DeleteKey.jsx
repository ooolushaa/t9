import React, { Component } from 'react';
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

class DeleteKey extends Component {
  render() {
    return (
      <Container onClick={this.props.onClickHandler}>
        Delete
      </Container>
    );
  }
}

export default DeleteKey;
