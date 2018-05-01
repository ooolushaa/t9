import React, { Component } from 'react';
import styled from 'styled-components';
import Numpad from '../Numpad';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const Block = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 400px;
  height: 600px;
  flex-direction: column;
`;

const Screen = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;

const KeysMapping = [
  {
    number: 1,
    symbols: '',
  },
  {
    number: 2,
    symbols: 'abc',
  },
  {
    number: 3,
    symbols: 'def',
  },
  {
    number: 4,
    symbols: 'ghi',
  },
  {
    number: 5,
    symbols: 'jkl',
  },
  {
    number: 6,
    symbols: 'mno',
  },
  {
    number: 7,
    symbols: 'pqrs',
  },
  {
    number: 8,
    symbols: 'tuv',
  },
  {
    number: 9,
    symbols: 'wxyz',
  },
];

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberString: '',
    };

    this.onClickNumberHandler = this.onClickNumberHandler.bind(this);
  }

  onClickNumberHandler (number) {
   this.setState(prevState => {
     return {
       numberString: prevState.numberString + number,
     };
   });
  }

  render() {
    return (
      <Container>
        <Block>
          <Screen>
            {this.state.numberString}
          </Screen>
          <Numpad keys={KeysMapping} onClickNumberHandler={this.onClickNumberHandler} clearNumberString={() => { this.setState({ numberString: '' }); }} />
        </Block>
      </Container>
    );
  }
}

export default MainScreen;
