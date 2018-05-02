import React from 'react';
import styled from 'styled-components';
import MainScreen from './Components/MainScreen/MainScreen';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ccc;
  height: 3rem;
  padding: 20px;
}
`;

const Link = styled.a`
  color: #000;
  text-decoration: none;
}
`;

const App = () => (
  <Main>
    <MainScreen />
    <Footer>
      <Link target="_blank" href="https://github.com/ooolushaa/t9">https://github.com/ooolushaa/t9</Link>
    </Footer>
  </Main>
);

export default App;
