import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [name, setName] = React.useState('');
  return (
    <div className="wrapper">
      <h1>{`Hello my Name is ${name}`}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
