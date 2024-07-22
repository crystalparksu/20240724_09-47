import { css } from 'styled-components';

export const flex = (ai = 'center', jc = 'center') =>
    css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
  `;

export const columnFlex = (ai = 'center', jc = 'center') =>
    css`
    display: flex;
    flex-direction: column;
    justify-content: ${jc};
    align-items: ${ai};
  `;