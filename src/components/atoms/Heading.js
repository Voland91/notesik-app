import styled from 'styled-components';

const Button = styled.h1`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bbold};
  font-size: ${({ theme }) => theme.large};
  text-transform: uppercase;
  line-height: 15px;
`;

export default Button;
