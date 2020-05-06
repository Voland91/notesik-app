import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Note from 'components/molecules/Note';
import MainTemplate from 'templates/MainTemplate';
import logo from 'assets/notesik-logo-blue.svg';

const StyledLogoLink = styled.div`
  display: block;
  width: 200px;
  height: 80px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Root = () => (
  <MainTemplate>
    <>
      <StyledLogoLink to="/" />
      <Paragraph>Today is 29 April 2020</Paragraph>
      <Heading>Hello User,</Heading> <Heading>how was your day?</Heading>
      <Button>add your note</Button>
      <br />
      <br />
      <Note />
      <Note />
    </>
  </MainTemplate>
);

export default Root;
