import {
  type CSSInterpolation,
  createTheme,
  useCacheToken,
  useCSSVarRegister,
  useStyleRegister,
} from '@ant-design/cssinjs';
import { ConfigContext } from 'antd/es/config-provider';
import type { AliasToken } from 'antd/es/theme/interface';
import { isObject, isString } from 'lodash-es';
import React from 'react';

export type ThemeToken = Partial<AliasToken>;

export interface UseStyleUtilsProps {
  /** CSS 类名前缀 */
  prefixCls: string;
  /** 组件自定义的 token */
  token?: ThemeToken;
  /** 组件样式 */
  style?: (prefixCls: string, token: ThemeToken) => CSSInterpolation;
}

export default function useStyleUtils({
  prefixCls,
  token: componentToken = {},
  style: styleFn,
}: UseStyleUtilsProps): (string | undefined)[] {
  const { theme: themeConfig } = React.useContext(ConfigContext);
  const {
    token: customToken = {},
    hashed: customHashed,
    cssVar: customCssVar = false,
  } = themeConfig || {};

  const theme = createTheme(() => ({
    ...customToken,
    ...componentToken,
  }));

  const themeKey = React.useId();
  const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
  const cssVar: {
    prefix?: string;
    key?: string;
  } = {
    prefix: prefixCls,
    key: cssVarKey,
  };

  if (customCssVar === false) {
    cssVar.prefix = undefined;
    cssVar.key = undefined;
  } else if (isObject(customCssVar)) {
    if (isString(customCssVar?.prefix)) {
      cssVar.prefix = customCssVar.prefix;
    }
    if (isString(customCssVar?.key)) {
      cssVar.key = customCssVar.key;
    }
  }

  // 获取计算后的 token
  const [cssVarToken, hashId, cssStyleToken] = useCacheToken(theme, [], {
    salt: isString(customHashed) ? customHashed : undefined,
    cssVar,
  });

  // 注册 CSS 变量
  const [computedCssVarToken] = useCSSVarRegister(
    {
      token: cssStyleToken,
      path: [prefixCls],
      scope: prefixCls,
      key: cssVarKey,
      ...cssVar,
    },
    () => componentToken,
  );

  const mergedToken: Record<PropertyKey, unknown> =
    customCssVar === false
      ? cssStyleToken
      : {
          ...cssVarToken,
          ...computedCssVarToken,
        };
  const mergedHashId = customHashed === false ? undefined : hashId;

  // 将样式注册到 DOM 中（生成 <style>）
  useStyleRegister(
    {
      theme,
      hashId: mergedHashId,
      token: mergedToken,
      path: [prefixCls],
    },
    () => styleFn?.(prefixCls, mergedToken),
  );

  return [mergedHashId, cssVar.key];
}
