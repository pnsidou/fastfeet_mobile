import produce from 'immer';

const INITIAL_STATE = { list: [], deliveryId: null };

export default function problems(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        draft = state;
        break;
    }
  });
}
