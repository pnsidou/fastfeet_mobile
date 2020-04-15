import produce from 'immer';

const INITIAL_STATE = { list: [] };

export default function deliveries(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveries/LIST_SUCCESS': {
        draft.list = action.payload;
        break;
      }
      case '@problems/LIST_SUCCESS': {
        const { deliveryId, problems } = action.payload;
        const deliveriesList = state.list;
        draft.list = deliveriesList.map((delivery) =>
          delivery.id === deliveryId ? { ...delivery, problems } : delivery
        );
        break;
      }

      default:
        draft = state;
        break;
    }
  });
}
