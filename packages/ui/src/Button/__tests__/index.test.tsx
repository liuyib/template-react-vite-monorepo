import { mountTest, render } from '@repo/shared';
import Button from '../index';

describe('Button', () => {
  mountTest(Button);

  it('renders correctly', () => {
    const result = render(<Button />);

    expect(result).toMatchSnapshot();
  });
});
