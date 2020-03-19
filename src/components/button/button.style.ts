import styled from 'styled-components';
import { darken, lighten } from 'polished';

const ButtonBase = styled.button`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  background-color: #fde24f;
  border: none;
  color: #00214d;
  padding: 15px 10px;
  cursor: pointer;
  &:hover {
    background-color: ${darken(0.2, '#fde24f')};
  }
  &:disabled {
    background-color: ${lighten(0.2, '#fde24f')};
    cursor: not-allowed;
  }
`;

export default ButtonBase;
