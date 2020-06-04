import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.button`
  cursor: pointer;
  font-weight: 700;
  transition: 180ms ease-in-out;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  min-width: 2.2rem;
  min-height: 2.2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 1.6rem;

  background-color: ${(p) => lighten(0.025, p.color)};
  border-color: ${(p) => p.borderColor};

  span {
    margin-left: ${(p) => (p.icon ? '15px' : '0')};
  }
  :hover {
    background-color: ${(p) => darken(0.1, p.color)};
    text-decoration: none;
  }
`;
