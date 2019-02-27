import React from 'react';
import styled from 'styled-components';

import * as AppStyles from '../../styles/common/App';

class App extends React.Component {
  render() {
    return (
      <AppStyles.App className="App">
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
      </AppStyles.App>
    );
  }
}

const StyledP = styled.p`
    font-size:20px;
    color:tomato;
`;

export default App;


