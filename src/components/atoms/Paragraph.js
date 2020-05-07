import styled from 'styled-components';

const Button = styled.p`
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.small};
  margin: 10px 0;
  flex: 1;
  max-height: 15ch;
  overflow: hidden;
`;

export default Button;
