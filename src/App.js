import React, { Component } from 'react';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StyledP>
            Edit <code>src/App.js</code> and save to reload.
          </StyledP>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const StyledP = styled.p`
    font-size:20px;
    color:tomato;
`;

export default App;


