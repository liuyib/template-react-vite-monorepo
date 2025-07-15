import type { CSSInterpolation } from '@ant-design/cssinjs';
import { useStyleUtils } from '@repo/shared';
import type { ThemeToken } from '../../ConfigProvider';

export interface SwitchToken extends ThemeToken {
  // TODO: token type
}

export const switchToken: SwitchToken = {
  // TODO: token
};

// common style
export const buttonStyle = (prefixCls: string, token: SwitchToken): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      // TODO: style
    },
  };
};

export default function useStyle(prefixCls: string) {
  return useStyleUtils({
    prefixCls,
    token: switchToken,
    style: (prefixCls, token) => [buttonStyle(prefixCls, token)],
  });
}
