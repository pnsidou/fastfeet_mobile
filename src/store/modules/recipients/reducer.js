import produce from 'immer';

const INITIAL_STATE = { list: [] };

export default function recipients(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recipients/LIST_SUCCESS': {
        draft.list = action.payload;
        break;
      }
      default:
        draft = state;
        break;
    }
  });
}
