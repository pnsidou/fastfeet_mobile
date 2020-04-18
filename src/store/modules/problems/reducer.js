import produce from 'immer';

const INITIAL_STATE = { mapFromDeliveries: {} };

export default function problems(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problems/LIST_SUCCESS': {
        const { deliveryId, problems: problemsList } = action.payload;
        draft.mapFromDeliveries[deliveryId] = problemsList;
        break;
      }
      default:
        draft = state;
        break;
    }
  });
}
