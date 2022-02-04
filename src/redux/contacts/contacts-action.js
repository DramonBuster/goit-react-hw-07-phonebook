import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/Add');
export const deleteContact = createAction('contact/Delete');
export const filterContact = createAction('contact/Filter');
