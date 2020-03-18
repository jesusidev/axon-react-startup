import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';

const defaultProps = {
  disabled: false,
  onClick: () => {
    // eslint-disable-next-line no-console
    console.log('It works');
  }
};

const { disabled, onClick } = defaultProps;

describe('First Test Button', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Button disabled={disabled} onClick={onClick}>
        Hello Button
      </Button>
    );
    const appComponent = wrapper.find('button');
    expect(appComponent.length).toBe(1);
  });
});
