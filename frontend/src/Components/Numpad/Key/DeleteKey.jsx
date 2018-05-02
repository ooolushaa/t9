import React from 'react';
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

const DeleteKey = ({ onClickHandler }) => (
  <Container onClick={onClickHandler}>
    Delete
  </Container>
);

DeleteKey.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default DeleteKey;
