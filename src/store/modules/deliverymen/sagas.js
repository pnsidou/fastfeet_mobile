import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  listDeliverymenSuccess,
  listDeliverymenFailure,
  deleteDeliverymanSuccess,
  deleteDeliverymanFailure,
  registerDeliverymanSuccess,
  registerDeliverymanFailure,
  updateDeliverymanSuccess,
  updateDeliverymanFailure,
} from './actions';

import api from '~/services/api';

export function* listDeliverymen({ payload }) {
  try {
    const response = yield call(api.get, '/deliverymen');
    yield put(listDeliverymenSuccess(response.data));
  } catch (err) {
    yield put(listDeliverymenFailure());
  }
}

export function* registerDeliveryman({ payload }) {
  try {
    const response = yield call(api.post, '/deliverymen', payload);

    yield put(registerDeliverymanSuccess());
  } catch (err) {
    yield put(registerDeliverymanFailure());
  }
}

export function* updateDeliveryman({ payload }) {
  try {
    const { id, data } = payload;
    const response = yield call(api.put, `/deliverymen/${id}`, data);
    yield put(updateDeliverymanSuccess());
  } catch (err) {
    yield put(updateDeliverymanFailure());
  }
}

export function* deleteDeliveryman({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/deliverymen/${id}`);

    yield put(deleteDeliverymanSuccess());
  } catch (err) {
    toast('Failed to delete deliveryman');
    yield put(deleteDeliverymanFailure());
  }
}

export default all([
  takeLatest('@deliverymen/LIST_REQUEST', listDeliverymen),
  takeLatest('@deliverymen/DELETE_REQUEST', deleteDeliveryman),
  takeLatest('@deliverymen/REGISTER_REQUEST', registerDeliveryman),
  takeLatest('@deliverymen/UPDATE_REQUEST', updateDeliveryman),
  takeLatest('@deliverymen/DELETE_SUCCESS', listDeliverymen),
  takeLatest('@deliverymen/REGISTER_SUCCESS', listDeliverymen),
  takeLatest('@deliverymen/UPDATE_SUCCESS', listDeliverymen),
]);
