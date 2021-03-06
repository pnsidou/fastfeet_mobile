import produce from 'immer';

const INITIAL_STATE = { list: [], updated: false };

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveries/LIST_REQUEST': {
        draft.updated = false;
        break;
      }
      case '@deliveries/LIST_SUCCESS': {
        draft.list = action.payload;
        draft.updated = true;
        break;
      }
      case '@deliveries/START_SUCCESS': {
        draft.updated = false;
        break;
      }
      case '@deliveries/FINISH_SUCCESS': {
        draft.updated = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.updated = false;
        break;
      }
      default:
        draft = state;
        break;
    }
  });
}
