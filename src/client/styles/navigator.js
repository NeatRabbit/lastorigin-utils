import {css} from 'emotion';
import {colors} from './common';

export const wrap = css`
  background-color: ${colors.backgroundBelow};
`;

export const inner = css`
  position: relative;
  max-width: 800px;
  margin: auto;
  text-align: center;
  line-height: 60px;
`;

export const link = css`
  font-size: 20px;
  text-decoration: none;
  color: ${colors.textPrimary};

  & + & {
    margin-left: 16px;
  }
`;

export const isActive = css`
  ${link}
  color: ${colors.primary};
`;

export const title = css`
  position: absolute;
  left: 20px;
  font-size: 20px;
  color: ${colors.textPrimary};

  @media screen and (max-width: 767px) {
    position: relative;
    left: 0;
    display: block;
  }
`;
