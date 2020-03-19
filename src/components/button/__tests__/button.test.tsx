import React from 'react';
import { render } from '@testing-library/react';
import Button from '../button';

describe('Button Component', () => {
  test('Loading Button Message', () => {
    const { queryByText } = render(<Button disabled>Loading...</Button>);

    expect(queryByText('Loading...')).toBeTruthy();
  });
});
