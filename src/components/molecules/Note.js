import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 300px;
`;

const Note = () => (
  <StyledWrapper>
    <Title>29.10</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque incidunt eveniet a,
      voluptatum mollitia qui maiores ducimus repellat ipsam rerum nostrum voluptates fugit magni,
      nulla perspiciatis! Quod, repellendus natus.
    </Paragraph>
    <Button small>read more...</Button>
  </StyledWrapper>
);

export default Note;
