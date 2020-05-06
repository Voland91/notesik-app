import styled from 'styled-components';

const Button = styled.h2`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.medium};
  text-transform: uppercase;
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 4px solid ${({ theme }) => theme.blue};
  margin: 10px 0;
  align-self: flex-start;
`;

export default Button;
