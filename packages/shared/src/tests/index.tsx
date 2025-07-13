import { type RenderOptions, render } from '@testing-library/react';
import { type ReactElement, StrictMode } from 'react';

export const strictModeRender = ((ui: ReactElement, options?: Partial<RenderOptions>) => {
  return render(ui, {
    wrapper: StrictMode,
    ...options,
  });
}) as typeof render;

export { render as pureRender, strictModeRender as render };

export const mountTest = (Component: React.ComponentType) => {
  describe('mount and unmount', () => {
    it('component could be updated and unmounted without errors', () => {
      const { unmount, rerender } = strictModeRender(<Component />);

      expect(() => {
        rerender(<Component />);
        unmount();
      }).not.toThrow();
    });
  });
};
