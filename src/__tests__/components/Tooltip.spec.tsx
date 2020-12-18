import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField: () => ({
      fieldName: 'username',
      defaultValue: '',
      error: 'Required field',
      registerField: jest.fn(),
    }),
  };
});

describe('Tooltip component', () => {
  it('should be able to render a tooltip when there is an error', () => {
    const { getByText } = render(
      <Input name="username" placeholder="Username" />,
    );

    const tooltipElement = getByText('Required field');

    expect(tooltipElement).toBeTruthy();
  });
});
