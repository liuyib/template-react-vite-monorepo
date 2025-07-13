import React from 'react';
import { DesignTokenContext } from '../ConfigProvider';

export interface ButtonProps extends React.PropsWithChildren {
  onClick?: () => void;
}

const Button = ({ children, ...props }: ButtonProps) => {
  const res = React.useContext(DesignTokenContext);
  console.log('res:', res);

  // TODO: 使用 @ant-design/cssinjs 改造，然后接入 dumi

  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
