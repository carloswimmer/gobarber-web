import React from 'react';
import { act, fireEvent, render, wait } from '@testing-library/react';
import ToastContainer from '../../components/ToastContainer';

import { ToastMessage } from '../../hooks/toast';

const messages: ToastMessage[] = [
  {
    id: 'toast1',
    type: 'success',
    title: 'Sucesso',
    description: 'Tivemos sucesso.',
  },
];

const mockedRemoveToast = jest.fn();

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      removeToast: mockedRemoveToast,
    }),
  };
});

describe('Toast Container', () => {
  it('should be able to remove a toast with a click', () => {
    const { getByTestId } = render(<ToastContainer messages={messages} />);
    const elementToClick = getByTestId('toast-remove-button');

    act(() => {
      fireEvent.click(elementToClick);
    });

    expect(mockedRemoveToast).toHaveBeenCalledWith('toast1');
  });

  jest.useFakeTimers();

  it('should be able to remove a toast after 3 seconds', () => {
    render(<ToastContainer messages={messages} />);

    jest.runAllTimers();

    expect(mockedRemoveToast).toHaveBeenCalledWith('toast1');
  });
});
