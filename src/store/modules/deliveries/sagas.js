import { takeLatest, call, put, all } from 'redux-saga/effects';
import { basename } from 'path';

import {
  listDeliveriesSuccess,
  listDeliveriesFailure,
  startDeliverySuccess,
  startDeliveryFailure,
  finishDeliverySuccess,
  finishDeliveryFailure,
} from './actions';

import api from '~/services/api';

export function* listDeliveries({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `/deliveryman/${id}/deliveries`);
    yield put(listDeliveriesSuccess(response.data));
  } catch (err) {
    yield put(listDeliveriesFailure());
  }
}

export function* finishDelivery({ payload }) {
  try {
    const { deliveryId, uri } = payload;

    const form = new FormData();

    const signature = {
      uri,
      type: 'image/jpeg',
      name: basename(uri),
    };

    form.append('signature', signature);

    api.post(`/delivery/${deliveryId}/finish`, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    yield put(finishDeliverySuccess());
  } catch (err) {
    console.tron.error(err);
    yield put(finishDeliveryFailure());
  }
}

export function* startDelivery({ payload }) {
  try {
    const { deliveryId } = payload;

    yield call(api.post, `/delivery/${deliveryId}/start`);

    yield put(startDeliverySuccess());
  } catch (err) {
    console.tron.error(err);
    yield put(startDeliveryFailure());
  }
}

export default all([
  takeLatest('@deliveries/LIST_REQUEST', listDeliveries),
  takeLatest('@deliveries/START_REQUEST', startDelivery),
  takeLatest('@deliveries/FINISH_REQUEST', finishDelivery),
]);
