import { renderHook, act } from '@testing-library/react-hooks';
import { ToastProvider, useToast } from '../../hooks/toast';

describe('Toast hook', () => {
  it('should be able to add messages', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    act(() => {
      result.current.addToast({
        type: 'success',
        title: 'Sucesso',
        description: 'Tivemos sucesso.',
      });
    });

    expect(result.current.messages[0].title).toEqual('Sucesso');
  });

  it('should be able to remove messages', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    act(() => {
      result.current.addToast({
        type: 'success',
        title: 'Sucesso',
        description: 'Tivemos sucesso.',
      });
    });

    const { id } = result.current.messages[0];

    act(() => {
      result.current.removeToast(id);
    });

    expect(result.current.messages).toHaveLength(0);
  });
});
