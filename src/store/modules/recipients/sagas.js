import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  listRecipientsSuccess,
  listRecipientsFailure,
  deleteRecipientSuccess,
  deleteRecipientFailure,
  registerRecipientSuccess,
  registerRecipientFailure,
  updateRecipientSuccess,
  updateRecipientFailure,
} from './actions';

import api from '~/services/api';

export function* listRecipients({ payload }) {
  try {
    const response = yield call(api.get, '/recipients');
    yield put(listRecipientsSuccess(response.data));
  } catch (err) {
    yield put(listRecipientsFailure());
  }
}

export function* registerRecipient({ payload }) {
  try {
    const response = yield call(api.post, '/recipients', payload);

    yield put(registerRecipientSuccess());
  } catch (err) {
    yield put(registerRecipientFailure());
  }
}

export function* updateRecipient({ payload }) {
  try {
    const { id, data } = payload;
    const response = yield call(api.put, `/recipients/${id}`, data);
    console.tron.log('update saga recipient', response);
    yield put(updateRecipientSuccess());
  } catch (err) {
    yield put(updateRecipientFailure());
  }
}

export function* deleteRecipient({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/recipients/${id}`);

    yield put(deleteRecipientSuccess());
  } catch (err) {
    toast('Failed to delete recipient');
    yield put(deleteRecipientFailure());
  }
}

export default all([
  takeLatest('@recipients/LIST_REQUEST', listRecipients),
  takeLatest('@recipients/DELETE_REQUEST', deleteRecipient),
  takeLatest('@recipients/REGISTER_REQUEST', registerRecipient),
  takeLatest('@recipients/UPDATE_REQUEST', updateRecipient),
  takeLatest('@recipients/DELETE_SUCCESS', listRecipients),
  takeLatest('@recipients/REGISTER_SUCCESS', listRecipients),
  takeLatest('@recipients/UPDATE_SUCCESS', listRecipients),
]);
