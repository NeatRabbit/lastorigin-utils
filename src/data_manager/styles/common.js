import {css} from 'emotion';

const styles = {
  navigator: css`
    text-align: center;
  `,
  link: css`
    font-size: 16px;
    line-height: 20px;

    & + & {
      margin-left: 8px;
    }
  `
}

export default styles;
