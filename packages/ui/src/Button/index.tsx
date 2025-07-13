import type React from 'react';

export interface ButtonProps extends React.PropsWithChildren {
  onClick?: () => void;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
