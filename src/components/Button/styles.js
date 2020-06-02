import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  height: 36px;
  width: 112px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border: solid 1px #000;
  border-radius: 4px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: background 0.2s;

  background: #7159c1;

  &:hover {
    background: ${lighten(0.03, '#7159c1')};
  }

  svg {
    margin-right: 8px;
    margin-left: 10px;
  }

  .divname {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
