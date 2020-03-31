import React from 'react';
import Button from './components/button/Button';
import helloString from './helpers/hello';

const App: React.FC = () => {
  const [name, setName] = React.useState<string | null>('');
  const [isLoading, setIsLoading] = React.useState(false);

  const onButtonClick = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setName(`🎈${name}🎈`);
    }, 2000);
  };

  return (
    <div className="wrapper">
      <h1>{helloString(name)}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <Button disabled={isLoading} onClick={onButtonClick}>
        {isLoading ? 'Loading...' : 'Click for balloons'}
      </Button>
    </div>
  );
};

export default App;
