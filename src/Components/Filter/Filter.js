import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 600;
  color: black;
`;

const FormInput = styled.input`
  width: 200px;
  border-radius: 3px;
  border: solid 2px black;
  margin-bottom: 20px;

  :focus {
    outline: none;
    box-shadow: 0px 0px 1px 1px blue;
    border: solid 1px black;
  }
`;

const FormHeading = styled.h3`
  margin-bottom: 10px;
`;

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(actions.filterContact(event.target.value));

  return (
    <FormItem>
      <FormHeading>Find contacts by name</FormHeading>
      <FormInput type="text" value={value} onChange={onChange} />
    </FormItem>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
