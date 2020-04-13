import React from 'react';
import { GlobalStyle } from './styles/default';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <h1>Hello React</h1>
      </div>
    </>
  );
};

export default App;
