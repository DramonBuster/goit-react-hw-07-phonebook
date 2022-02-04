// import { useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import styled from 'styled-components';
// import data from '../../data/contacts.json';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
// import * as actions from '../../redux/contacts/contacts-action';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: venter;
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0px;
  }
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  text-align: center;
`;

const SubHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
`;

export default function Phonebook() {
  return (
    <Wrapper>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <SubHeading>Contacts</SubHeading>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
