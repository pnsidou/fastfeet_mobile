export function listRecipients(query) {
  return {
    type: '@recipients/LIST_REQUEST',
    payload: query,
  };
}

export function listRecipientsSuccess(recipients) {
  return {
    type: '@recipients/LIST_SUCCESS',
    payload: recipients,
  };
}

export function listRecipientsFailure() {
  return {
    type: '@recipients/LIST_FAILURE',
  };
}

export function registerRecipient(data) {
  return {
    type: '@recipients/REGISTER_REQUEST',
    payload: data,
  };
}

export function registerRecipientSuccess() {
  return {
    type: '@recipients/REGISTER_SUCCESS',
  };
}

export function registerRecipientFailure() {
  return {
    type: '@recipients/REGISTER_FAILURE',
  };
}

export function deleteRecipient(id) {
  return {
    type: '@recipients/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteRecipientSuccess() {
  return {
    type: '@recipients/DELETE_SUCCESS',
  };
}

export function deleteRecipientFailure() {
  return {
    type: '@recipients/DELETE_FAILURE',
  };
}

export function updateRecipient(id, data) {
  return {
    type: '@recipients/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function updateRecipientSuccess() {
  return {
    type: '@recipients/UPDATE_SUCCESS',
  };
}

export function updateRecipientFailure() {
  return {
    type: '@recipients/UPDATE_FAILURE',
  };
}
