import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Note from 'components/molecules/Note';
import MainTemplate from 'templates/MainTemplate';
import logo from 'assets/notesik-logo-blue.svg';

const StyledLogoLink = styled.div`
  display: block;
  width: 150px;
  height: 60px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
  margin-bottom: 50px;
  cursor: pointer;
`;

const GetCurrentDate = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentMonth = months[today.getMonth()];
  const currentDay = today.getDate();
  return `Today is ${currentDay} ${currentMonth} ${currentYear}`;
};

const StyledNotesWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
`;

const Notes = ({ notes }) => (
  <MainTemplate>
    <>
      <StyledLogoLink to="/" />
      <Paragraph>{GetCurrentDate()}</Paragraph>
      <Heading>Hello User,</Heading> <Heading>how was your day?</Heading>
      <Button>add your note</Button>
      <StyledNotesWrapper>
        {notes.map(({ date, content, id }) => (
          <Note date={date} content={content} key={id} id={id} />
        ))}
      </StyledNotesWrapper>
    </>
  </MainTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
