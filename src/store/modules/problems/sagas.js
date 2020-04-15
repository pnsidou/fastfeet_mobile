import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  listProblemsRequest,
  listProblemsSuccess,
  listProblemsFailure,
  registerProblemSuccess,
  registerProblemFailure,
} from './actions';

import api from '~/services/api';

export function* listProblems({ payload }) {
  try {
    const { deliveryId } = payload;
    const response = yield call(api.get, `/delivery/${deliveryId}/problems`);

    yield put(listProblemsSuccess(deliveryId, response.data));
  } catch (err) {
    yield put(listProblemsFailure());
  }
}

export function* registerProblem({ payload }) {
  try {
    const { deliveryId, description } = payload;
    yield call(api.post, `/delivery/${deliveryId}/problems`, { description });
    yield put(registerProblemSuccess());
    yield put(listProblemsRequest(deliveryId));
  } catch (err) {
    yield put(registerProblemFailure());
  }
}

export default all([
  takeLatest('@problems/LIST_REQUEST', listProblems),
  takeLatest('@problems/REGISTER_REQUEST', registerProblem),
  takeLatest('@problems/REGISTER_SUCCESS', listProblems),
]);
