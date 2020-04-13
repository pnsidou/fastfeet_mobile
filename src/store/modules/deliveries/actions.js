export function listDeliveries(id: number, delivered?: boolean) {
  return {
    type: '@deliveries/LIST_REQUEST',
    payload: { id, delivered },
  };
}

export function listDeliveriesSuccess(deliveries) {
  return {
    type: '@deliveries/LIST_SUCCESS',
    payload: deliveries,
  };
}

export function listDeliveriesFailure() {
  return {
    type: '@deliveries/LIST_FAILURE',
  };
}
