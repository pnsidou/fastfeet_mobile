export function listDelivered(id: number) {
  return {
    type: '@delivered/LIST_REQUEST',
    payload: { id },
  };
}

export function listDeliveredSuccess(delivered) {
  return {
    type: '@delivered/LIST_SUCCESS',
    payload: delivered,
  };
}

export function listDeliveredFailure() {
  return {
    type: '@delivered/LIST_FAILURE',
  };
}
