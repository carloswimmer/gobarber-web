import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render a button', () => {
    const { getByText } = render(<Button>Entrar</Button>);

    const buttonElement = getByText('Entrar');

    expect(buttonElement).toBeTruthy();
  });

  it('should be shown another text during loading', () => {
    const loading = true;
    const { getByText } = render(<Button loading={loading}>Entrar</Button>);

    const buttonElement = getByText('Carregando...');

    expect(buttonElement).toBeTruthy();
  });
});
