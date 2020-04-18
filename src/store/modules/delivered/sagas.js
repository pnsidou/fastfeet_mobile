import { takeLatest, call, put, all } from 'redux-saga/effects';

import { listDeliveredSuccess, listDeliveredFailure } from './actions';

import api from '~/services/api';

export function* listDelivered({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `/deliveryman/${id}/delivered`);
    yield put(listDeliveredSuccess(response.data));
  } catch (err) {
    yield put(listDeliveredFailure());
  }
}

export default all([takeLatest('@deliveries/LIST_REQUEST', listDelivered)]);
