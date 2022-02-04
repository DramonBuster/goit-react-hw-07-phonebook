import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import data from '../../data/contacts.json';
import { addContact, deleteContact, filterContact } from './contacts-action';

const items = createReducer(data, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
