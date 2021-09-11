/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
import React from 'react';
import { render } from '@testing-library/react';
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
