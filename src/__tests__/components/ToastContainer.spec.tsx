import React from 'react';
import { render } from '@testing-library/react';
import ToastContainer from '../../components/ToastContainer';

import { ToastMessage } from '../../hooks/toast';

describe('Toast Container', () => {
  it('should be able to render 3 toasts', () => {
    const messages: ToastMessage[] = [
      {
        id: 'toast1',
        type: 'success',
        title: 'Sucesso',
        description: 'Tivemos sucesso.',
      },
      {
        id: 'toast2',
        type: 'error',
        title: 'Erro',
        description: 'Tivemos problema.',
      },
      {
        id: 'toast3',
        type: undefined,
        title: 'Info',
        description: 'Informação.',
      },
    ];

    const { getByText } = render(<ToastContainer messages={messages} />);

    expect(getByText('Sucesso')).toBeTruthy();
    expect(getByText('Erro')).toBeTruthy();
    expect(getByText('Info')).toBeTruthy();
  });
});
