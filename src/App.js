import React from 'react';
import './App.css';

import styled from 'styled-components';
import { Navbar } from './components/Navbar';


/* Styled Components */
const Wrapper = styled.body`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: auto;
  text-align: center;
`;


function App() {
  return (
    <div className="App">
      <Wrapper className="wrapper">
        <Navbar />
      </Wrapper>
    </div>
  );
}


export default App;
