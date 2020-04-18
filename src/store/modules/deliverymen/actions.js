export function listDeliverymen(query) {
  return {
    type: '@deliverymen/LIST_REQUEST',
    payload: query,
  };
}

export function listDeliverymenSuccess(deliverymen) {
  return {
    type: '@deliverymen/LIST_SUCCESS',
    payload: deliverymen,
  };
}

export function listDeliverymenFailure() {
  return {
    type: '@deliverymen/LIST_FAILURE',
  };
}

export function registerDeliveryman(data) {
  return {
    type: '@deliverymen/REGISTER_REQUEST',
    payload: data,
  };
}

export function registerDeliverymanSuccess() {
  return {
    type: '@deliverymen/REGISTER_SUCCESS',
  };
}

export function registerDeliverymanFailure() {
  return {
    type: '@deliverymen/REGISTER_FAILURE',
  };
}

export function deleteDeliveryman(id) {
  return {
    type: '@deliverymen/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteDeliverymanSuccess() {
  return {
    type: '@deliverymen/DELETE_SUCCESS',
  };
}

export function deleteDeliverymanFailure() {
  return {
    type: '@deliverymen/DELETE_FAILURE',
  };
}

export function updateDeliveryman(id, data) {
  return {
    type: '@deliverymen/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function updateDeliverymanSuccess() {
  return {
    type: '@deliverymen/UPDATE_SUCCESS',
  };
}

export function updateDeliverymanFailure() {
  return {
    type: '@deliverymen/UPDATE_FAILURE',
  };
}
