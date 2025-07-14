import { mountTest, render } from '@repo/shared';
import Button from '../index';

describe('Button', () => {
  mountTest(Button);

  it('renders correctly', () => {
    const result = render(<Button />);

    expect(result).toMatchSnapshot();
  });

  it('size', () => {
    const { container: container1 } = render(<Button size="small" />);
    const { container: container2 } = render(<Button />);
    const { container: container3 } = render(<Button size="large" />);

    expect(container1.querySelector('.ant-btn-sm')).toBeTruthy();
    expect(container2.querySelector('.ant-btn')).toBeTruthy();
    expect(container3.querySelector('.ant-btn-lg')).toBeTruthy();
  });
});
