import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  height: 45px;
  padding: 0 30px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.medium};
  border: 3px solid ${({ theme }) => theme.blue};
  margin: 10px 0;
  cursor: pointer;

  :first-letter {
    text-transform: capitalize;
  }

  :hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.blue};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.blue};

      :hover {
        background-color: ${({ theme }) => theme.blue};
        color: ${({ theme }) => theme.white};
      }
    `}
  ${({ small }) =>
    small &&
    css`
      height: 25px;
      padding: 0 15 + px;
      font-size: ${({ theme }) => theme.xsmall};
      align-self: flex-start;
    `}
`;

export default Button;
