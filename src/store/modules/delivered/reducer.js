import produce from 'immer';

const INITIAL_STATE = { list: [], updated: false };

export default function delivered(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivered/LIST_REQUEST': {
        draft.updated = false;
        break;
      }
      case '@delivered/LIST_SUCCESS': {
        draft.list = action.payload;
        draft.updated = true;
        break;
      }
      case '@deliveries/FINISH_SUCCESS': {
        draft.updated = false;
        break;
      }
      default:
        draft = state;
        break;
    }
  });
}
