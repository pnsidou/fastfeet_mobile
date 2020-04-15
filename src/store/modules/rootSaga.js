import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import deliveries from './deliveries/sagas';
import problems from './problems/sagas';

export default function* rootSaga() {
  return yield all([auth, deliveries, problems]);
}
