import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import deliveries from './deliveries/reducer';
import delivered from './delivered/reducer';
import problems from './problems/reducer';

export default combineReducers({
  auth,
  user,
  deliveries,
  delivered,
  problems,
});
