import {css} from 'emotion';

export const colors = {
  background: '#333335',
  backgroundBelow: '#262628',
  backgroundAbove: '#48484a',
  primary: '#55aaff',
  textPrimary: '#fff'
}

export const wrap = css`
  min-height: 100vh;
  background-color: ${colors.background};
`;
