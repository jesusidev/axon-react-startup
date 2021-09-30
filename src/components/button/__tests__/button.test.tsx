
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import Button from '../Button';

describe('Button Component', () => {
  test('Loading Button Message', () => {
    const { queryByText } = render(
      <Button onClick={() => console.log('test')} disabled>
        Loading...
      </Button>
    );

    expect(queryByText('Loading...')).toBeTruthy();
  });
});
