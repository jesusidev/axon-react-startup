import Button from './components/button/Button';
import helloString from './helpers/hello';
import { FC, useState } from 'react';

const App: FC = () => {
  const [name, setName] = useState<string | null>('');
  const [isLoading, setIsLoading] = useState(false);

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
            <h2>TESt</h2>
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
