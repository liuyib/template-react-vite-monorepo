import { Button as AntdButton, type ButtonProps as AntdButtonProps } from 'antd';

export interface ButtonProps extends AntdButtonProps {}

const Button = ({ children, ...props }: ButtonProps) => {
  return <AntdButton {...props}>{children}</AntdButton>;
};

export default Button;
