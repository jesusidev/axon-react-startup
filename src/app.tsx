import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button/button';

const App: React.FC = () => {
  const [name, setName] = React.useState<string | null>('');
  const [isLoading, setIsLoading] = React.useState(false);

  const onButtonClick = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setName(`${name}!🎈`);
    }, 2000);
  };

  return (
    <div className="wrapper">
      <h1>{`Hello my Name is ${name}`}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <Button disabled={isLoading} onClick={onButtonClick}>
        {isLoading ? 'Loading...' : 'Click for balloons'}
      </Button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
