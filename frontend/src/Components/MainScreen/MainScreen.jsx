import React, { Component } from 'react';
import styled from 'styled-components';
import Numpad from '../Numpad/Numpad';
import { getSuggestions } from '../../services/api';

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
  max-width: 100%;
  height: 200px;
  margin: 20px;
  flex-wrap: wrap;
  overflow: scroll;
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
  constructor() {
    super();

    this.state = {
      numberString: '',
      suggestions: [],
    };

    this.onClickNumberHandler = this.onClickNumberHandler.bind(this);
    this.sendSuggestionRequest = this.sendSuggestionRequest.bind(this);
  }

  onClickNumberHandler(number) {
    this.setState(prevState => ({
      numberString: prevState.numberString + number,
    }), () => {
      this.sendSuggestionRequest();
    });
  }

  sendSuggestionRequest() {
    getSuggestions(this.state.numberString).then((response) => {
      if (response.data.ok) {
        this.setState({
          suggestions: response.data.suggestions,
        });
      }
    }).catch((err) => {
      throw err;
    });
  }

  render() {
    return (
      <Container>
        <Block>
          <Screen>
            {this.state.suggestions.map((suggestion, i) => (
              <span key={suggestion}>
                {suggestion}
                {i !== this.state.suggestions.length - 1 && (<span>,&nbsp;</span>)}
              </span>
            ))}
          </Screen>
          <Numpad keys={KeysMapping} onClickNumberHandler={this.onClickNumberHandler} clearNumberString={() => { this.setState({ numberString: '', suggestions: [] }); }} />
        </Block>
      </Container>
    );
  }
}

export default MainScreen;
