import { Button as AntdButton, type ButtonProps as AntdButtonProps } from 'antd';
import { ConfigContext } from 'antd/es/config-provider';
import classNames from 'classnames';
import { useContext } from 'react';
import useStyle from './style';

export interface ButtonProps extends AntdButtonProps {}

const Button = ({ children, ...restProps }: ButtonProps) => {
  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('button', restProps.prefixCls);

  const [hashId, cssVarCls] = useStyle(prefixCls);

  const mergeClassName = classNames(hashId, cssVarCls);

  return (
    <AntdButton {...restProps} className={mergeClassName} prefixCls={prefixCls}>
      {children}
    </AntdButton>
  );
};

export default Button;
