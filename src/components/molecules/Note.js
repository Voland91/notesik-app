import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const handleClick = () => {};

const Note = ({ date, content }) => (
  <StyledWrapper>
    <Title onClick={handleClick}>{date}</Title>
    <Paragraph>{content}</Paragraph>
    <Button onClick={handleClick} small>
      read more...
    </Button>
  </StyledWrapper>
);

Note.propTypes = {
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
