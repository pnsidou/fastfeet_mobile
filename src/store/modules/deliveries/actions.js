export function listDeliveries(id: number) {
  return {
    type: '@deliveries/LIST_REQUEST',
    payload: { id },
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

export function startDelivery(deliveryId) {
  return {
    type: '@deliveries/START_REQUEST',
    payload: { deliveryId },
  };
}

export function startDeliverySuccess() {
  return {
    type: '@deliveries/START_SUCCESS',
  };
}

export function startDeliveryFailure() {
  return {
    type: '@deliveries/START_FAILURE',
  };
}

export function finishDelivery(deliveryId, uri) {
  return {
    type: '@deliveries/FINISH_REQUEST',
    payload: { deliveryId, uri },
  };
}

export function finishDeliverySuccess() {
  return {
    type: '@deliveries/FINISH_SUCCESS',
  };
}

export function finishDeliveryFailure() {
  return {
    type: '@deliveries/FINISH_FAILURE',
  };
}
