import {
  ConfigProvider as AntdConfigProvider,
  type ConfigProviderProps as AntdConfigProviderProps,
  type ThemeConfig as AntdThemeConfig,
} from 'antd';
import type { AliasToken } from 'antd/es/theme/internal';
import React from 'react';

export type ConfigProviderProps = AntdConfigProviderProps;

export interface ThemeToken extends Partial<AliasToken> {
  // TODO: your custom design token
  globalTestToken?: string;
}

export const themeToken = {
  globalTestToken: '20px',
};

export type ThemeConfig = AntdThemeConfig & {
  token?: ThemeToken;
};

export const DesignTokenContext = React.createContext<ThemeConfig>({
  token: themeToken,
});

const ConfigProvider = ({ children, theme = {}, ...restProps }: ConfigProviderProps) => {
  return (
    <AntdConfigProvider theme={theme} {...restProps}>
      <DesignTokenContext.Provider value={theme}>{children}</DesignTokenContext.Provider>
    </AntdConfigProvider>
  );
};

export default ConfigProvider;
